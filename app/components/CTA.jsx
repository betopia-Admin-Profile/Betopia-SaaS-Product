"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageSquare, Calendar } from 'lucide-react';

const CTA = () => {
    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden bg-slate-900 rounded-[3rem] px-8 py-20 md:p-24 text-center">
                    {/* Background Glows */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
                        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] mix-blend-screen"></div>
                    </div>

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-wide mb-8 leading-[1.1]">
                            Ready to Engineer Your <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400">Digital Future?</span>
                        </h2>

                        <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Join the ranks of forward-thinking enterprises that trust Boomering to build, scale, and secure their mission-critical software.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto btn-neon-emerald group flex items-center justify-center px-8 py-4 rounded-full font-bold text-slate-900 transition-all shadow-lg hover:shadow-emerald-500/25"
                            >
                                <Calendar className="w-5 h-5 mr-3" />
                                Schedule Consultation
                                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link
                                href="/chat"
                                className="w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-full font-bold text-white border border-slate-700 hover:bg-slate-800 hover:border-slate-600 transition-all"
                            >
                                <MessageSquare className="w-5 h-5 mr-3" />
                                Chat with Sales
                            </Link>
                        </div>
                    </div>

                    {/* Decorative Grid Lines */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[100px_100px] mask-[radial-gradient(ellipse_at_center,black_30%,transparent_70%)] pointer-events-none"></div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
