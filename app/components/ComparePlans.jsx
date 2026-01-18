"use client";

import React from 'react';
import { Check, X, Info } from 'lucide-react';

const ComparePlans = () => {
    const plans = [
        {
            name: "Basic",
            tagline: "Startup Essentials",
            color: "text-emerald-500",
            bgColor: "bg-emerald-50",
            borderColor: "border-emerald-100",
            buttonColor: "bg-emerald-500 hover:bg-emerald-600",
            features: [
                { name: "AI-Powered Website", included: true },
                { name: "AI Chatbot (Ready-made)", included: true },
                { name: "Basic Automation", included: true },
                { name: "Cloud Deployment (Basic)", included: true },
                { name: "Security (Basic)", included: true },
                { name: "Mobile Application", included: false },
                { name: "Custom AI Models", included: false },
                { name: "API Integrations", included: false },
                { name: "Priority Support", included: false },
            ]
        },
        {
            name: "Standard",
            tagline: "Growth Scale",
            color: "text-brandCuriousBlue",
            bgColor: "bg-blue-50",
            borderColor: "border-blue-100",
            buttonColor: "bg-blue-600 hover:bg-blue-700",
            popular: true,
            features: [
                { name: "AI-Powered Website", included: true },
                { name: "Mobile App (MVP)", included: true },
                { name: "AI Chatbot (Business)", included: true },
                { name: "API & CRM Integration", included: true },
                { name: "Standard Security", included: true },
                { name: "Admin Dashboard", included: true },
                { name: "Analytics Dashboard", included: true },
                { name: "Custom AI Models", included: false },
                { name: "Priority Support", included: false },
            ]
        },
        {
            name: "Premium",
            tagline: "Enterprise Full",
            color: "text-brandPurple",
            bgColor: "bg-purple-50",
            borderColor: "border-purple-100",
            buttonColor: "bg-brandPurple hover:opacity-90",
            features: [
                { name: "AI-Powered Website", included: true },
                { name: "Full Mobile App", included: true },
                { name: "Custom AI Chatbot", included: true },
                { name: "Custom AI Models", included: true },
                { name: "Scalable Cloud Hosting", included: true },
                { name: "Enterprise Security", included: true },
                { name: "CI/CD Pipeline", included: true },
                { name: "Priority Support", included: true },
                { name: "Advanced Analytics", included: true },
            ]
        },
        {
            name: "Custom",
            tagline: "Tailored Solution",
            color: "text-slate-900",
            bgColor: "bg-slate-100",
            borderColor: "border-slate-200",
            buttonColor: "bg-slate-900 hover:bg-black",
            features: [
                { name: "All Features Included", included: true },
                { name: "Private AI Models", included: true },
                { name: "On-Premise Deployment", included: true },
                { name: "Full IP Ownership", included: true },
                { name: "IoT/ERP Integrations", included: true },
                { name: "Dedicated Solution Arch", included: true },
                { name: "Custom Security Audit", included: true },
                { name: "24/7 Priority Support", included: true },
                { name: "White-Label Rights", included: true },
            ]
        }
    ];

    return (
        <section className="py-32 bg-white relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <span className="text-brandCuriousBlue font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Select Your Tier</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Compare Plans</h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
                        Find the perfect architecture for your AI journey. Side-by-side comparison of our modular enterprise solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col p-8 rounded-[2.5rem] border ${plan.borderColor} transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 bg-white ${plan.popular ? 'ring-2 ring-blue-600 ring-offset-4 ring-offset-white' : ''}`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${plan.color} mb-2 block`}>
                                    {plan.tagline}
                                </span>
                                <h3 className="text-3xl font-black text-slate-900">{plan.name}</h3>
                            </div>

                            <ul className="space-y-4 mb-10 flex-1">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-start">
                                        {feature.included ? (
                                            <div className="mr-3 mt-1 p-0.5 rounded-full bg-emerald-50">
                                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                                            </div>
                                        ) : (
                                            <div className="mr-3 mt-1 p-0.5 rounded-full bg-slate-50">
                                                <X className="w-3.5 h-3.5 text-slate-300" />
                                            </div>
                                        )}
                                        <span className={`text-sm font-medium ${feature.included ? 'text-slate-600' : 'text-slate-400'}`}>
                                            {feature.name}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-full text-white font-bold text-sm tracking-widest uppercase transition-all shadow-md active:scale-95 ${plan.buttonColor}`}>
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-16 flex items-center justify-center space-x-3 text-slate-400 text-xs font-medium">
                    <Info className="w-4 h-4 text-brandCuriousBlue" />
                    <p>Prices depend on specific requirements. Contact us for a precise quote.</p>
                </div>
            </div>
        </section>
    );
};

export default ComparePlans;
