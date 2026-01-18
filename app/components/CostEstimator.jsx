"use client";

import React from 'react';
import { Calculator, Clock, ArrowRight } from 'lucide-react';

const CostEstimator = () => {
    const plans = [
        {
            tag: "AI Testing",
            name: "BasicAI Journey",
            hours: 40,
            price: 600,
            color: "text-emerald-400",
            borderColor: "border-emerald-500/20",
            glowColor: "bg-emerald-500/5"
        },
        {
            tag: "AI Working",
            name: "StandardAI Jump",
            hours: 100,
            price: 1500,
            color: "text-brandCuriousBlue",
            borderColor: "border-brandCuriousBlue/20",
            glowColor: "bg-brandCuriousBlue/5"
        },
        {
            tag: "AI Leading",
            name: "PremiumAI Rule",
            hours: 220,
            price: 3300,
            color: "text-purple-400",
            borderColor: "border-purple-500/20",
            glowColor: "bg-purple-500/5"
        },
        {
            tag: "AI Dominating",
            name: "CustomAI",
            hours: 400,
            price: "6,000+",
            color: "text-white",
            borderColor: "border-slate-700",
            glowColor: "bg-slate-400/5"
        }
    ];

    return (
        <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[40px_40px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                        <Calculator className="w-4 h-4 text-brandCuriousBlue" />
                        <span className="text-xs font-bold text-brandCuriousBlue uppercase tracking-widest">Transparent Pricing</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Estimated Build Cost</h2>
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                        Based on <span className="text-brandCuriousBlue font-bold">$15/hour</span> — clear, honest estimates to help you plan your AI transformation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`group relative p-10 rounded-[2.5rem] border ${plan.borderColor} bg-slate-900/40 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-slate-900/60`}
                        >
                            <div className={`absolute inset-0 ${plan.glowColor} rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity`}></div>

                            <div className="relative z-10 text-center">
                                <span className={`block text-[10px] font-black uppercase tracking-[0.2em] mb-4 ${plan.color}`}>
                                    {plan.tag}
                                </span>
                                <h3 className="text-2xl font-bold mb-8 text-white">{plan.name}</h3>

                                <div className="flex items-center justify-center space-x-2 text-slate-400 mb-8">
                                    <Clock className="w-4 h-4" />
                                    <span className="text-sm font-bold">{plan.hours} hours</span>
                                </div>

                                <div className="space-y-1">
                                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Starting at</span>
                                    <div className={`text-4xl font-black ${plan.color}`}>
                                        ${plan.price}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="mt-16 text-center text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed">
                    Estimates depend on scope, integrations, and delivery timeline. <br className="hidden md:block" />
                    Final quote provided after a short discovery call.
                </p>
            </div>
        </section>
    );
};

export default CostEstimator;
