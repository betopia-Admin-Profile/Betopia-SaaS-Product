"use client";

import React, { useState } from 'react';
import { Mail, Calendar, MapPin, Phone, ArrowRight, CheckCircle2, Globe, Clock, Shield } from 'lucide-react';

const ContactPage = () => {
    const [formState, setFormState] = useState('idle'); // idle, sending, success

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormState('sending');
        // Simulate API call
        setTimeout(() => setFormState('success'), 1500);
    };

    if (formState === 'success') {
        return (
            <div className="pt-32 min-h-screen bg-white flex items-center justify-center px-4">
                <div className="max-w-md w-full text-center space-y-6">
                    <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                        <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tight">Meeting Requested</h1>
                    <p className="text-slate-500 font-medium">
                        Our solution architects have received your request. We'll reach out within 4-6 business hours to confirm a slot.
                    </p>
                    <button
                        onClick={() => setFormState('idle')}
                        className="text-brandCuriousBlue font-bold uppercase tracking-widest text-xs flex items-center justify-center mx-auto group"
                    >
                        Send another request <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-24 min-h-screen bg-white">
            {/* Header Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-brandCuriousBlue font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Let's Connect</span>
                        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight">Schedule a Meeting</h1>
                        <p className="text-xl text-slate-500 leading-relaxed font-medium">
                            Ready to transform your enterprise with Agentic AI? <br className="hidden md:block" /> Tell us about your project and we'll engineer the perfect path forward.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">

                        {/* Info Column */}
                        <div className="lg:col-span-5 space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight italic">Why meet with us?</h2>
                                <div className="space-y-8">
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 shrink-0 rounded-2xl bg-brandCuriousBlue/10 flex items-center justify-center text-brandCuriousBlue">
                                            <Shield className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg mb-1 tracking-tight">Security-First Discovery</h4>
                                            <p className="text-slate-500 text-sm font-medium leading-relaxed">Discuss your requirements under a strict non-disclosure environment with our lead architects.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 shrink-0 rounded-2xl bg-brandPurple/10 flex items-center justify-center text-brandPurple">
                                            <Clock className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg mb-1 tracking-tight">Zero-Commitment Audit</h4>
                                            <p className="text-slate-500 text-sm font-medium leading-relaxed">Receive a preliminary feasibility report for your AI transition based on our initial 30-minute call.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 shrink-0 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                                            <Globe className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg mb-1 tracking-tight">Global Ops Assurance</h4>
                                            <p className="text-slate-500 text-sm font-medium leading-relaxed">Learn how our Dhaka delivery center integrates seamlessly with your local timezone and standards.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-10 rounded-[2.5rem] bg-brandPurple text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brandCuriousBlue/20 rounded-full blur-3xl"></div>
                                <h3 className="font-bold mb-8 relative z-10 uppercase tracking-widest text-slate-400 text-xs">Direct Contact</h3>
                                <div className="space-y-6 relative z-10">
                                    <div className="flex items-center gap-4">
                                        <Mail className="w-5 h-5 text-brandCuriousBlue" />
                                        <span className="font-medium text-slate-100">solutions@boomering.com</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Phone className="w-5 h-5 text-brandCuriousBlue" />
                                        <span className="font-medium text-slate-100">+880 123 456 789</span>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <MapPin className="w-5 h-5 text-brandCuriousBlue mt-1" />
                                        <span className="font-medium text-slate-100">Dhaka Engineering Center, <br />Bangladesh</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="lg:col-span-7">
                            <form onSubmit={handleSubmit} className="p-8 md:p-12 rounded-[3.5rem] border border-slate-100 bg-white shadow-2xl shadow-slate-200/50 space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-4">Full Name</label>
                                        <input required type="text" placeholder="John Doe" className="w-full px-8 py-4 rounded-full bg-slate-50 border border-transparent focus:border-brandCuriousBlue outline-none transition-all font-medium" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-4">Work Email</label>
                                        <input required type="email" placeholder="john@enterprise.com" className="w-full px-8 py-4 rounded-full bg-slate-50 border border-transparent focus:border-brandCuriousBlue outline-none transition-all font-medium" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-4">Company Name</label>
                                        <input required type="text" placeholder="Acme Corp" className="w-full px-8 py-4 rounded-full bg-slate-50 border border-transparent focus:border-brandCuriousBlue outline-none transition-all font-medium" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-4">Industry</label>
                                        <select className="w-full px-8 py-4 rounded-full bg-slate-50 border border-transparent focus:border-brandCuriousBlue outline-none transition-all font-medium appearance-none">
                                            <option>FinTech</option>
                                            <option>Healthcare</option>
                                            <option>E-commerce</option>
                                            <option>RMG/Manufacturing</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-4">Project Scope</label>
                                    <textarea rows="4" placeholder="Briefly describe your requirements..." className="w-full px-8 py-6 rounded-4xl bg-slate-50 border border-transparent focus:border-brandCuriousBlue outline-none transition-all font-medium resize-none"></textarea>
                                </div>
                                <button
                                    disabled={formState === 'sending'}
                                    className="w-full py-5 rounded-full bg-slate-900 text-white font-black text-sm uppercase tracking-[0.2em] hover:bg-black transition-all shadow-xl active:scale-[0.98] disabled:opacity-50 flex items-center justify-center"
                                >
                                    {formState === 'sending' ? 'Engineers Notified...' : 'Request Insight Session'}
                                    <ArrowRight className="ml-3 w-5 h-5" />
                                </button>
                                <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest">
                                    By clicking, you agree to our security and data processing protocols.
                                </p>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
