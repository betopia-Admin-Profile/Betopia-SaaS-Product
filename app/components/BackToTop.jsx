"use client";

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.scrollY > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top coordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className={`fixed bottom-10 right-10 z-99999 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-75 pointer-events-none'}`}>
            <button
                onClick={scrollToTop}
                className="w-14 h-14 bg-white/90 backdrop-blur-xl border border-slate-200 text-slate-900 rounded-full flex items-center justify-center shadow-2xl hover:bg-brandCuriousBlue hover:text-white hover:border-brandCuriousBlue transition-all duration-300 group active:scale-90"
                aria-label="Back to top"
            >
                <ArrowUp className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
        </div>
    );
};

export default BackToTop;
