"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import heroData from '../data/hero.json';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[#030712]">

            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(77,42,131,0.15),transparent_50%)]"></div>

            {/* Video positioned on the right side - smaller and more to the right */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[50%] h-[70%] z-0 hidden lg:block">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    style={{
                        maskImage: 'radial-gradient(ellipse 70% 70% at 60% 50%, black 20%, transparent 70%)',
                        WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 60% 50%, black 20%, transparent 70%)',
                        opacity: 0.8
                    }}
                >
                    <source src="/hero-video.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div className="flex flex-col items-start text-left py-20">

                        {/* Pill Badge */}
                        <div className="inline-flex items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-2 mb-8 hover:bg-white/10 transition-colors cursor-default">
                            <span className="flex h-2 w-2 relative mr-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brandCuriousBlue opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brandCuriousBlue"></span>
                            </span>
                            <span className="text-sm font-medium text-slate-300 tracking-wide">
                                {heroData.badge.text}
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                            {heroData.headline}
                            <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-brandCuriousBlue via-purple-400 to-pink-500">
                                {heroData.headline2}
                            </span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg text-slate-400 leading-relaxed max-w-lg mb-10 font-light">
                            {heroData.subheadline}
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row items-start gap-4">
                            {heroData.buttons.map((btn, index) => (
                                btn.primary ? (
                                    <Link
                                        key={index}
                                        href={btn.link}
                                        className="group relative px-8 py-4 rounded-full font-semibold text-sm tracking-wider text-white bg-brandPurple hover:bg-brandCuriousBlue transition-all duration-300 shadow-lg shadow-purple-900/30 hover:shadow-cyan-500/30 flex items-center justify-center"
                                    >
                                        {btn.text}
                                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                ) : (
                                    <Link
                                        key={index}
                                        href={btn.link}
                                        className="group flex items-center justify-center px-8 py-4 rounded-full font-semibold text-sm tracking-wider text-white border border-white/20 hover:bg-white/10 transition-colors"
                                    >
                                        <Play className="mr-2 w-4 h-4" />
                                        {btn.text}
                                    </Link>
                                )
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Empty, video shows behind */}
                    <div className="hidden lg:block"></div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
