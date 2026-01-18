"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import heroData from '../data/hero.json';

const Hero = () => {
    return (
        <section className="relative min-h-[95vh] flex flex-col justify-center items-center overflow-hidden bg-[#f5f5f7] pt-32 pb-20">
            <div className="container mx-auto px-4 sm:px-0 relative z-10 flex flex-col items-center text-center">

                {/* New Pill Badge */}
                <div className="inline-flex items-center bg-white p-1.5 pr-6 rounded-full border border-slate-200 shadow-sm mb-8 hover:shadow-md transition-shadow cursor-default">
                    <span className="bg-brandCuriousBlue text-slate-100 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mr-3">
                        {heroData.badge.label}
                    </span>
                    <span className="text-sm font-bold text-slate-600 tracking-tight">
                        {heroData.badge.text}
                    </span>
                </div>

                {/* Headline */}
                <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-wide leading-[1.05] mb-4 max-w-5xl mx-auto">
                    {heroData.headline}
                    <span className="text-5xl md:text-7xl font-bold text-brandPurple tracking-wide leading-[1.05] mb-4 max-w-5xl mx-auto ml-2">
                        {heroData.headline2}
                    </span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-3xl mx-auto mb-12 font-medium">
                    {heroData.subheadline}
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 w-full">
                    {heroData.buttons.map((btn, index) => (
                        btn.primary ? (
                            <Link
                                key={index}
                                href={btn.link}
                                className="btn-neon-emerald flex items-center group px-8 py-4 rounded-full font-semibold text-sm tracking-wider text-slate-100 shadow-xl shadow-emerald-500/10 min-w-[200px] justify-center"
                            >
                                {btn.text}
                                <div className="ml-4 w-7 h-7 bg-white rounded-full flex items-center justify-center text-black group-hover:translate-x-1 transition-transform">
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </Link>
                        ) : (
                            <Link
                                key={index}
                                href={btn.link}
                                className="group flex items-center justify-center text-slate-900 font-semibold text-sm tracking-wider hover:text-blue-600 transition-colors min-w-[200px]"
                            >
                                {btn.text} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        )
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
