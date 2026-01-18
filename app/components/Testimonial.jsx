"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TESTIMONIALS = [
    {
        quote: "Boomering Group transformed our operational efficiency. Their Agentic AI solution didn't just automate tasks; it completely reimagined our workflow, saving us countless hours per week.",
        author: "Sarah Jenkins",
        role: "CTO, TechFlow Dynamics",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        quote: "The scalability of their multi-tenant cloud infrastructure is unmatched. We expanded to three new continents without a single hitch in performance or data security.",
        author: "David Chen",
        role: "VP of Engineering, GlobalNet",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        quote: "Tolkora AI's personalized marketing assets have acted as a force multiplier for our creative team. We are producing 10x the content with the same headcount.",
        author: "Elena Rodriguez",
        role: "CMO, BrightSpark Media",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
        quote: "Security was our top concern. Boomering's zero-trust architecture gave us the confidence to migrate our most sensitive patient data to the cloud.",
        author: "Dr. Marcus Thorne",
        role: "Director of IT, MedSecure Systems",
        avatar: "https://randomuser.me/api/portraits/men/85.jpg"
    },
    {
        quote: "Developing with custom software usually takes months. Boomering delivered a working modular MVP in weeks, allowing us to capture the market ahead of schedule.",
        author: "Priya Patel",
        role: "Founder, RapidScale Startups",
        avatar: "https://randomuser.me/api/portraits/women/12.jpg"
    },
    {
        quote: "The seamless integration of EduOS into our campus ecosystem has modernized our entire administrative process. It's intuitive, fast, and reliable.",
        author: "James Wilson",
        role: "Dean of Technology, Westford University",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    }
];

const Testimonial = () => {
    const [testimonialIndex, setTestimonialIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile(); // Check on mount
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const nextTestimonial = () => {
        const visibleCount = isMobile ? 1 : 3;
        const maxIndex = TESTIMONIALS.length - visibleCount;

        // If we want to loop back to start immediately when we hit the "end" of viewable items
        if (testimonialIndex >= maxIndex) {
            setTestimonialIndex(0);
        } else {
            setTestimonialIndex(prev => prev + 1);
        }
    };

    const prevTestimonial = () => {
        const visibleCount = isMobile ? 1 : 3;
        const maxIndex = TESTIMONIALS.length - visibleCount;

        if (testimonialIndex <= 0) {
            setTestimonialIndex(maxIndex);
        } else {
            setTestimonialIndex(prev => prev - 1);
        }
    };

    return (
        <section className="py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                {/* Header with Title and Nav Arrows */}
                <div className="flex items-end justify-between mb-16">
                    <div>
                        <h2 className="text-5xl font-bold text-slate-900 tracking-tight mb-4">What Our Clients Say</h2>
                        <p className="text-slate-500 text-sm font-medium">Hear directly from our satisfied clients</p>
                    </div>
                    <div className="flex space-x-4 mb-2">
                        <button
                            onClick={prevTestimonial}
                            className="w-10 h-10 rounded-full bg-slate-400 flex items-center justify-center text-white hover:bg-slate-500 transition-colors shadow-sm"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="w-10 h-10 rounded-full bg-emerald-400 flex items-center justify-center text-white hover:bg-emerald-500 transition-colors shadow-sm"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Carousel Viewport - Added overflow-hidden here */}
                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${testimonialIndex * (100 / (isMobile ? 1 : 3))}%)` }}
                    >
                        {TESTIMONIALS.map((t, i) => (
                            <div
                                key={i}
                                className={`${isMobile ? 'w-full px-0' : 'w-1/3 px-3'} shrink-0`}
                            >
                                <div className="bg-slate-50 p-10 rounded-xl flex flex-col h-full border border-slate-100/50 hover:bg-white hover:shadow-xl transition-all duration-300">
                                    <div className="mb-8">
                                        <Quote className="w-12 h-12 text-slate-200 fill-slate-200" />
                                    </div>
                                    <p className="text-slate-600 text-[15px] leading-[1.6] font-medium mb-12 grow">
                                        "{t.quote}"
                                    </p>
                                    <div className="flex items-center pt-6 border-t border-slate-200/50">
                                        <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full mr-4 object-cover border border-slate-200" />
                                        <div>
                                            <div className="font-bold text-slate-900 text-sm tracking-tight">{t.author}</div>
                                            <div className="text-slate-400 text-[11px] font-bold tracking-tight">{t.role}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
