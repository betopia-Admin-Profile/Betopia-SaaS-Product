"use client";

import React from 'react';
import { Calendar, User, ArrowRight, Lightbulb } from 'lucide-react';
import Link from 'next/link';

const InsightsPage = () => {
    const posts = [
        {
            title: "The Rise of Agentic AI in Sovereign Workflows",
            category: "Technical Research",
            author: "Engineering Team",
            date: "Jan 12, 2026",
            image: "/agentic AI.png",
            desc: "How autonomous agents are redefining enterprise productivity and why privacy-first LLMs are the future."
        },
        {
            title: "Scaling Global Infrastructure from Dhaka",
            category: "Case Study",
            author: "Architect Team",
            date: "Jan 05, 2026",
            image: "/mailer.png",
            desc: "A deep dive into how Boomering manages high-concurrency systems for 10M+ users across continents."
        },
        {
            title: "Zero-Trust Architecture: Beyond the Buzzword",
            category: "Cybersecurity",
            author: "Security Desk",
            date: "Dec 20, 2025",
            image: "/ivr.png",
            desc: "Implementing E2E encryption and identity-based access in modular enterprise ecosystems."
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-white">
            {/* Header */}
            <section className="py-24 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 text-center">
                    <span className="text-brandCuriousBlue font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Knowledge Hub</span>
                    <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight italic">Insights & <br />Breakthroughs</h1>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
                        Exploring the frontier of AI, Cloud, and Engineering. Stay updated with the latest research from Boomering.
                    </p>
                </div>
            </section>

            {/* Featured Post */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="group relative rounded-[3.5rem] overflow-hidden bg-slate-900 aspect-21/9 flex items-center p-12 md:p-24">
                        <div className="absolute inset-0 opacity-40">
                            <img src="/business 247 erp.png" alt="Featured" className="w-full h-full object-contain" />
                        </div>
                        <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
                        <div className="relative z-10 max-w-2xl">
                            <span className="px-4 py-2 bg-brandCuriousBlue/20 border border-brandCuriousBlue/30 rounded-full text-brandCuriousBlue text-[10px] font-black uppercase tracking-widest mb-8 inline-block">Featured Insight</span>
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">The Future of <br />Autonomous Enterprises</h2>
                            <p className="text-slate-300 text-lg mb-8 leading-relaxed font-medium">Explore how we are helping companies transition from traditional automation to fully agentic AI workflows.</p>
                            <Link href="/insights/future-of-autonomous-enterprises" className="inline-flex items-center text-white font-bold uppercase tracking-widest text-xs">
                                Read the Report <ArrowRight className="ml-3 w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Insights Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {posts.map((post, i) => (
                            <Link href={`/insights/${i}`} key={i} className="group flex flex-col">
                                <div className="aspect-4/3 rounded-[2.5rem] bg-slate-50 border border-slate-100 overflow-hidden mb-8 relative">
                                    <img src={post.image} alt={post.title} className="w-full h-full object-contain p-8 transform group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-black text-brandCuriousBlue uppercase tracking-widest border border-slate-100 shadow-sm">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                                    <span className="flex items-center"><Calendar className="w-3 h-3 mr-1.5" /> {post.date}</span>
                                    <span className="flex items-center"><User className="w-3 h-3 mr-1.5" /> {post.author}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brandCuriousBlue transition-colors leading-tight">
                                    {post.title}
                                </h3>
                                <p className="text-slate-500 font-medium leading-relaxed mb-6 line-clamp-2">
                                    {post.desc}
                                </p>
                                <span className="inline-flex items-center text-brandCuriousBlue font-black uppercase tracking-widest text-[10px]">
                                    Read Article <ArrowRight className="ml-2 w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-32 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="w-20 h-20 bg-brandCuriousBlue/10 rounded-3xl flex items-center justify-center text-brandCuriousBlue mx-auto mb-10">
                            <Lightbulb className="w-10 h-10" />
                        </div>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight italic">Stay Ahead of the Curve</h2>
                        <p className="text-slate-500 text-lg mb-10 font-medium">Get the latest technical breakthroughs and enterprise insights delivered to your inbox once a month.</p>
                        <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your work email"
                                className="flex-1 px-8 py-4 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brandCuriousBlue font-medium"
                            />
                            <button className="px-10 py-4 bg-slate-900 text-white rounded-full font-bold text-sm tracking-widest uppercase hover:bg-black transition-colors shadow-xl">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InsightsPage;
