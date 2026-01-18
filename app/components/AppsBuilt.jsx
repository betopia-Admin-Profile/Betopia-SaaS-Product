"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const originalAppData = [
  { src: '/mobileApp/10001.png', link: '#' },
  { src: '/mobileApp/10002.png', link: '#' },
  { src: '/mobileApp/10003.png', link: '#' },
  { src: '/mobileApp/10004.png', link: '#' },
  { src: '/mobileApp/10005.png', link: '#' },
  { src: '/mobileApp/10006.png', link: '#' },
  { src: '/mobileApp/10007.png', link: '#' },
  { src: '/mobileApp/10008.png', link: '#' },
  { src: '/mobileApp/10009.png', link: '#' },
  { src: '/mobileApp/10010.png', link: '#' },
  { src: '/mobileApp/10011.png', link: '#' },
  { src: '/mobileApp/10012.png', link: '#' },
  { src: '/mobileApp/10013.png', link: '#' },
  { src: '/mobileApp/10014.png', link: '#' },
  { src: '/mobileApp/10015.png', link: '#' },
  { src: '/mobileApp/10016.png', link: '#' },
  { src: '/mobileApp/10017.png', link: '#' },
  { src: '/mobileApp/10018.png', link: '#' },
  { src: '/mobileApp/10019.png', link: '#' },
  { src: '/mobileApp/10020.png', link: '#' },
  { src: '/mobileApp/10021.png', link: '#' },
];

// Triple the array to create a buffer for infinite scrolling
const appData = [...originalAppData, ...originalAppData, ...originalAppData];

const AppsBuilt = () => {
  // Start in the middle set
  const [currentIndex, setCurrentIndex] = useState(originalAppData.length);
  const [itemsPerView, setItemsPerView] = useState(5);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1); // Mobile: 1 item
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3); // Tablet: 3 items
      } else {
        setItemsPerView(5); // Desktop: 5 items
      }
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const goToNext = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const goToPrev = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(goToNext, 3000);
    return () => clearInterval(timer);
  }, [isPaused, goToNext]);

  // Handle infinite loop reset on transition end
  const handleTransitionEnd = () => {
    if (currentIndex >= originalAppData.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex(originalAppData.length);
    } else if (currentIndex < originalAppData.length) {
      setIsTransitioning(false);
      setCurrentIndex(originalAppData.length * 2 - 1);
    }
  };

  // Math for Centering the Active Item

  const totalItems = appData.length;
  // 1. How wide is one item relative to the Track? (100% / Total Items)
  const itemWidthOfTrack = 100 / totalItems;

  // 2. How wide is the Viewport (Container) relative to the Track?
  // Track is (TotalItems / ItemsPerView) times wider than Viewport.
  // So Viewport is (ItemsPerView / TotalItems) * 100% of Track.
  const viewportWidthOfTrack = (itemsPerView / totalItems) * 100;

  // 3. To center the Current Item:
  // We want the Center of the Item to align with the Center of the Viewport.
  // TranslateX = - (CenterItem - CenterViewport)

  const currentItemLeft = currentIndex * itemWidthOfTrack;
  const halfItem = itemWidthOfTrack / 2;
  const centerItem = currentItemLeft + halfItem;
  const centerViewport = viewportWidthOfTrack / 2;

  const translateX = - (centerItem - centerViewport);

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-32 md:mb-12">
          <span className="text-brandCuriousBlue font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Apps We've Built</h2>
          <p className="text-slate-500 text-lg">
            From fitness to finance — explore the mobile apps we've crafted.
          </p>
        </div>

        {/* Slider Viewport */}
        <div
          className="relative h-[600px] w-full" // Fixed height container for stability
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Track */}
          <div
            ref={trackRef}
            className="absolute top-0 left-0 h-full flex items-center will-change-transform"
            style={{
              width: `${appData.length * (100 / itemsPerView)}%`, // Total width based on items
              transform: `translateX(${translateX}%)`,
              transition: isTransitioning ? 'transform 500ms cubic-bezier(0.4, 0.0, 0.2, 1)' : 'none',
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {appData.map((item, index) => {
              // Determine if this specific item clone is the active one
              const isActive = index === currentIndex;

              return (
                <div
                  key={index}
                  className="relative px-6 transition-all duration-500 cursor-pointer"
                  style={{
                    width: `${100 / appData.length}%`, // Width relative to the massive track
                  }}
                  onClick={() => {
                    // Allow clicking side items to center them
                    if (!isActive) {
                      setIsTransitioning(true);
                      setCurrentIndex(index);
                    }
                  }}
                >
                  <div
                    className={`
                      relative rounded-[2.5rem] overflow-hidden bg-white shadow-xl border border-slate-100 transition-all duration-500
                      ${isActive ? 'scale-110 z-10 shadow-2xl ring-4 ring-brandCuriousBlue/10' : 'scale-90 opacity-60 hover:opacity-100 hover:scale-95'}
                    `}
                    style={{
                      transformOrigin: 'center center',
                    }}
                  >
                    {/* Image Container */}
                    <div className="aspect-[9/19] w-full bg-slate-100 relative">
                      <img
                        src={item.src}
                        alt={`Mobile App ${index}`}
                        className="w-full h-full object-cover"
                      />

                      {/* Hover Scroll - Button at Bottom */}
                      {/* We only show the button interaction on the active large card for better UX, or all if preferred. 
                          Given the 'scale' effect, usually active is the focus. */}
                      <div className={`absolute inset-0 flex flex-col justify-end p-6 opacity-0 hover:opacity-100 transition-opacity duration-300 ${!isActive && 'pointer-events-none'}`}>
                        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none transition-opacity duration-300" />
                        <Link
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative z-10 bg-white text-slate-900 w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brandCuriousBlue hover:text-white transition-all shadow-xl transform translate-y-4 hover:translate-y-0 duration-300"
                        >
                          Visit App <ExternalLink size={18} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppsBuilt;
