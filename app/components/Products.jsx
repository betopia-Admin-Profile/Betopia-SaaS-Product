"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight, Shield, Zap, Database, Globe, Box, Cpu, GraduationCap, HeartPulse, Phone, Clock, BookOpen, Monitor, School, Layers, Mail, Lock, Cloud } from 'lucide-react';
import { PRODUCTS } from '../data/products';



const PRODUCT_ICONS = {
    'agentic-ai': <Cpu />,
    'tolkora-ai': <Box />,
    'smart-ivr': <Phone />,
    'business-24x7': <Clock />,
    'edu-os': <GraduationCap />,
    'care-os': <HeartPulse />,
    'boomering-lms': <BookOpen />,
    'virtual-gate': <Monitor />,
    'smart-class': <School />,
    'boomering-stitch': <Layers />,
    'mail-campaign': <Mail />,
    'count-trust': <Lock />,
    'cloud-managed-services': <Cloud />
};

const Products = () => {
    return (
        <>
            {/* Our Products Section */}
            <section className="relative bg-slate-100 pt-32 pb-48">
                <div className="container mx-auto px-4 md:px-0 mb-24 text-center">
                    <span className="text-brandCuriousBlue font-bold text-xs uppercase tracking-[0.4em] mb-4 block">The Ecosystem</span>
                    <h2 className="text-5xl font-bold text-slate-900 tracking-wide leading-none">Our Intelligent Products</h2>
                    <p className="mt-6 text-slate-500 max-w-2xl mx-auto font-medium leading-tight">Modular, enterprise-grade AI solutions engineered for the modern scale.</p>
                </div>

                <div className="container mx-auto md:px-0 flex flex-col items-center">
                    {PRODUCTS.map((product, index) => (
                        <div
                            key={product.id}
                            className="sticky top-32 h-[65vh] w-full flex items-center justify-center px-4 md:px-0"
                            style={{ zIndex: index + 1, marginBottom: index === PRODUCTS.length - 1 ? '0' : '15vh' }}
                        >
                            <div className="w-full max-w-7xl h-full bg-white md:rounded-[2.5rem] rounded-4xl border border-slate-200 overflow-hidden flex flex-col md:flex-row transition-all duration-500  hover:shadow-2xl hover:shadow-slate-200/50">
                                <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center custom-scrollbar">
                                    <div className="mb-6">

                                        <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2 tracking-wide leading-none">{product.name.replace('Boomering ', '')}</h3>
                                        <p className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.15em] mb-3">{product.tagline}</p>
                                        <p className="text-slate-400 text-base lg:text-lg leading-snug mb-2 max-w-md">
                                            {product.overview.substring(0, 140)}...
                                        </p>
                                    </div>
                                    <div className="border-t border-slate-100 pt-2 space-y-2">
                                        {product.features.slice(0, 3).map((feature, fIndex) => (
                                            <div
                                                key={fIndex}
                                                className="group flex items-center justify-between py-1 transition-all"
                                            >
                                                <span className="text-slate-800 text-md font-semibold tracking-tight">
                                                    {feature}
                                                </span>

                                                <ChevronRight className="w-4 h-4 text-slate-300 transition-transform group-hover:translate-x-0.5 group-hover:text-slate-400" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-4">
                                        <Link
                                            href={`/products/${product.id}`}
                                            className="group flex items-center text-blue-700 font-bold text-[10px] uppercase tracking-[0.2em] hover:text-blue-900 transition-colors"
                                        >
                                            Explore More <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex-1 bg-white relative overflow-hidden  items-center justify-center p-8">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-contain filter drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Bento Grid Features */}
            <section className="py-40 bg-white relative overflow-hidden">
                {/* Background Ambient Glows */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-30">
                    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brandPurple/10 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brandCuriousBlue/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                    <div className="text-center mb-24">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-brandCuriousBlue/5 border border-brandCuriousBlue/10 text-brandCuriousBlue font-bold text-[10px] uppercase tracking-[0.4em] mb-6">Engineered for Excellence</span>
                        <h2 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-6 mt-2 leading-none">Enterprise Infrastructure</h2>
                        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">Built to scale with the world's most demanding businesses, backed by absolute security and global resilience.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
                        {/* Security Card - Larger 4 cols */}
                        <div className="md:col-span-4 group relative overflow-hidden rounded-[3.5rem] bg-brandPurple p-12 text-white transition-all duration-700 hover:shadow-[0_30px_60px_-15px_rgba(77,42,131,0.3)] hover:-translate-y-1">
                            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brandCuriousBlue opacity-20 rounded-full blur-[100px] transition-all duration-700 group-hover:opacity-40 group-hover:scale-125"></div>

                            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                                <div className="flex-1">
                                    <div className="w-20 h-20 bg-white/10 backdrop-blur-2xl rounded-3xl flex items-center justify-center mb-10 border border-white/20 shadow-2xl">
                                        <Shield className="w-10 h-10 text-brandCuriousBlue" />
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-wider">Absolute Security <br />Architecture</h3>
                                    <p className="text-slate-200 text-xl leading-relaxed font-medium">
                                        Zero-trust protocols and multi-layer E2E encryption ensure your proprietary data remains protected from ingestion to execution.
                                    </p>
                                </div>
                                <div className="hidden lg:grid grid-cols-2 gap-4 w-64 shrink-0">
                                    {['GDPR', 'ISO', 'SOC2', 'HIPAA', 'PCI', 'FERPA'].map((cert) => (
                                        <div key={cert} className="aspect-square bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center text-[10px] font-black tracking-widest text-white/40 hover:text-brandCuriousBlue transition-colors">
                                            {cert}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Speed Card - 2 cols */}
                        <div className="md:col-span-2 group relative overflow-hidden rounded-[3.5rem] bg-slate-50 p-12 border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-1">
                            <div className="w-16 h-16 bg-brandCuriousBlue/10 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:bg-brandCuriousBlue group-hover:scale-110">
                                <Zap className="w-8 h-8 text-brandCuriousBlue transition-colors group-hover:text-white" />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">Hyper-Speed <br />Integration</h3>
                            <p className="text-slate-500 text-lg leading-relaxed font-medium">
                                Modular API-first design allows seamless synchronization with legacy systems in record time.
                            </p>
                            <div className="mt-12 flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200"></div>
                                ))}
                            </div>
                        </div>

                        {/* Scale Card - 2 cols */}
                        <div className="md:col-span-2 group relative overflow-hidden rounded-[3.5rem] bg-slate-900 p-12 text-white transition-all duration-700 hover:shadow-2xl hover:shadow-slate-900/60 hover:-translate-y-1">
                            <div className="absolute inset-0 bg-linear-to-br from-brandPurple/20 to-transparent"></div>
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8">
                                    <Database className="w-8 h-8 text-emerald-400" />
                                </div>
                                <h3 className="text-3xl font-bold mb-6 leading-tight tracking-tight">Global Resilience</h3>
                                <p className="text-slate-400 text-lg leading-relaxed font-medium">
                                    Scalable infrastructure handling millions of concurrent users with zero downtime architecture.
                                </p>
                            </div>
                        </div>

                        {/* Presence Card - 4 cols */}
                        <div className="md:col-span-4 group relative overflow-hidden rounded-[3.5rem] bg-white border border-slate-100 p-12 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-1">
                            <div className="flex flex-col lg:flex-row items-center gap-16">
                                <div className="flex-1">
                                    <div className="w-16 h-16 bg-brandPurple/5 rounded-2xl flex items-center justify-center mb-8">
                                        <Globe className="w-8 h-8 text-brandPurple" />
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-wider">Dhaka to the World</h3>
                                    <p className="text-slate-500 text-xl leading-relaxed font-medium">
                                        Headquartered in Bangladesh, delivering world-class engineering with a global delivery network across London and New York.
                                    </p>
                                </div>

                                <div className="flex-1 w-full bg-slate-50 rounded-4xl p-10 border border-slate-100 relative group-hover:bg-white transition-colors">
                                    <div className="text-[10px] font-black text-slate-400 tracking-[0.4em] uppercase mb-10 text-center">Engineered & Delivered</div>
                                    <div className="flex flex-col gap-8">
                                        {[
                                            { city: 'DHAKA', label: 'Primary Engineering', color: 'bg-brandPurple' },
                                            { city: 'LONDON', label: 'Solution Architecture', color: 'bg-brandCuriousBlue' },
                                            { city: 'NYC', label: 'Global Strategy', color: 'bg-slate-900' }
                                        ].map((loc, i) => (
                                            <div key={loc.city} className="flex items-center gap-6">
                                                <div className={`w-3 h-3 rounded-full ${loc.color} shadow-lg shadow-current/50 shrink-0`}></div>
                                                <div className="flex-1 flex justify-between items-center border-b border-slate-200 pb-4">
                                                    <span className="font-black text-slate-900 tracking-wider text-sm">{loc.city}</span>
                                                    <span className="text-[10px] font-bold text-slate-400 tracking-tight">{loc.label}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Products;
