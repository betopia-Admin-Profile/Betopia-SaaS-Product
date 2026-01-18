import React from 'react';
import { Target, Users, ShieldCheck, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'About Us | Boomering Limited',
    description: 'Learn about Boomering Limited, our mission, values, and how we are engineering the digital future from Bangladesh to the world.',
};

const AboutPage = () => {
    const values = [
        {
            icon: <Target className="w-8 h-8" />,
            title: "Precision Engineering",
            desc: "We don't just build software; we engineer solutions with surgical precision to ensure maximum efficiency."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Global Talent",
            desc: "Headquartered in Dhaka, we tap into a world-class pool of engineers to deliver high-performance results."
        },
        {
            icon: <ShieldCheck className="w-8 h-8" />,
            title: "Uncompromising Security",
            desc: "Security is baked into our DNA. We implement enterprise-grade protocols across every line of code."
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Ethical Offshoring",
            desc: "We provide smart, simple offshoring that empowers local talent while delivering global value."
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 text-center">
                    <span className="text-brandCuriousBlue font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Our Story</span>
                    <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight">Engineering the <br /> Digital Future</h1>
                    <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
                        Boomering Limited is a global AI & Cloud Software Company. From our engineering hub in Bangladesh, we deliver secure, scalable, and intelligent solutions to enterprises worldwide.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-32">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Simple. Smart. <span className="text-brandPurple">Boomering.</span></h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Our mission is to simplify complex business problems through intelligent automation and robust software architecture. We believe that the best technology is invisible — it just works, allowing you to focus on growth.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-4">
                                    <div className="w-6 h-6 rounded-full bg-brandCuriousBlue/10 flex items-center justify-center text-brandCuriousBlue mt-1">
                                        <div className="w-2 h-2 rounded-full bg-current"></div>
                                    </div>
                                    <p className="text-slate-700 font-medium">Empowering 300+ enterprises globally.</p>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-6 h-6 rounded-full bg-brandPurple/10 flex items-center justify-center text-brandPurple mt-1">
                                        <div className="w-2 h-2 rounded-full bg-current"></div>
                                    </div>
                                    <p className="text-slate-700 font-medium">Headquartered in Dhaka with global reach.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-video bg-slate-100 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200">
                                <img src="/agentic AI.png" alt="Engineering Team" className="w-full h-full object-contain p-12" />
                            </div>
                            <div className="absolute -bottom-10 -left-10 bg-brandPurple text-white p-10 rounded-[2.5rem] shadow-xl hidden lg:block">
                                <div className="text-4xl font-bold mb-1">10+</div>
                                <div className="text-xs font-bold uppercase tracking-widest opacity-80">Years of Innovation</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brandCuriousBlue/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold mb-4 tracking-tight">Our Core Values</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">The principles that guide every line of code we write and every partnership we build.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((v, i) => (
                            <div key={i} className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                                <div className="text-brandCuriousBlue mb-6 transform group-hover:scale-110 transition-transform">{v.icon}</div>
                                <h3 className="text-xl font-bold mb-4">{v.title}</h3>
                                <p className="text-slate-400 leading-relaxed text-sm font-medium">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 tracking-tight">Ready to build the future together?</h2>
                    <Link href="/contact" className="inline-flex items-center px-10 py-5 rounded-full bg-brandCuriousBlue text-white font-bold tracking-widest uppercase text-sm hover:opacity-90 transition-all shadow-xl shadow-brandCuriousBlue/20">
                        Join Our Journey <ArrowRight className="ml-3 w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
