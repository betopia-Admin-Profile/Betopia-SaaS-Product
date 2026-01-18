import React from 'react';
import { Building2, ShoppingCart, HeartPulse, GraduationCap, Factory, Truck, Landmark, UtensilsCrossed, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'Industries | Boomering Limited',
    description: 'Bespoke AI and Cloud solutions for diverse industries including FinTech, Healthcare, Logistics, and RMG.',
};

const IndustriesPage = () => {
    const industries = [
        {
            icon: <Landmark className="w-10 h-10" />,
            title: "FinTech & Banking",
            desc: "Secure transaction processing, AI fraud detection, and regulatory compliance for global financial institutions.",
            count: "50+ Clients"
        },
        {
            icon: <HeartPulse className="w-10 h-10" />,
            title: "Healthcare (Care OS)",
            desc: "Patient management, telehealth solutions, and AI diagnostics for hospitals and clinics.",
            count: "120+ Medical Centers"
        },
        {
            icon: <GraduationCap className="w-10 h-10" />,
            title: "Education (Edu OS)",
            desc: "Unified LMS, smart classroom tech, and administrative automation for universities and schools.",
            count: "200+ Institutions"
        },
        {
            icon: <Factory className="w-10 h-10" />,
            title: "RMG & Manufacturing",
            desc: "Supply chain visibility, inventory control, and factory automation for the heart of Bangladesh industry.",
            count: "30+ Factory Groups"
        },
        {
            icon: <ShoppingCart className="w-10 h-10" />,
            title: "Retail & E-commerce",
            desc: "Omni-channel experiences, high-load payment gateways, and AI-driven personalized marketing.",
            count: "1M+ Daily Orders"
        },
        {
            icon: <Truck className="w-10 h-10" />,
            title: "Logistics & Supply Chain",
            desc: "Real-time tracking, route optimization, and fleet management for global transporters.",
            count: "500+ Fleet Managed"
        },
        {
            icon: <Building2 className="w-10 h-10" />,
            title: "Real Estate & Hospitality",
            desc: "Property management systems and smart hotel guest experiences with integrated IoT.",
            count: "15+ Major Projects"
        },
        {
            icon: <UtensilsCrossed className="w-10 h-10" />,
            title: "Service & Hospitality",
            desc: "Kitchen automation, reservation systems, and customer loyalty management.",
            count: "40+ Restaurant Groups"
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="text-brandPurple font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Our Reach</span>
                    <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight italic">Industry Specific <br />Intelligence</h1>
                    <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
                        We don't believe in one-size-fits-all. Our engineers build deep vertical domain expertise to solve industry-specific challenges with surgical precision.
                    </p>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="py-32">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {industries.map((ind, i) => (
                            <div key={i} className="group p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:border-brandCuriousBlue/30 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500">
                                <div className="w-16 h-16 rounded-2xl bg-slate-50 text-brandCuriousBlue flex items-center justify-center mb-8 group-hover:bg-brandCuriousBlue group-hover:text-white transition-all duration-500 group-hover:scale-110">
                                    {ind.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{ind.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium line-clamp-3 group-hover:text-slate-600">
                                    {ind.desc}
                                </p>
                                <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-brandCuriousBlue">{ind.count}</span>
                                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-brandCuriousBlue transform group-hover:translate-x-1 transition-all" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Domain Focus Section */}
            <section className="py-32 bg-slate-950 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brandPurple/5 rounded-full blur-[120px] -mr-96 -mt-96"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-4xl font-bold mb-12 tracking-tight">Need an Industry-Specific Build?</h2>
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-sm">
                            <h4 className="text-2xl font-bold mb-4 text-brandCuriousBlue">Consult</h4>
                            <p className="text-slate-400 text-sm">Deep discovery into your operational bottlenecks.</p>
                        </div>
                        <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-sm">
                            <h4 className="text-2xl font-bold mb-4 text-brandCuriousBlue">Architect</h4>
                            <p className="text-slate-400 text-sm">Designing systems that fit your specific vertical.</p>
                        </div>
                        <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-sm">
                            <h4 className="text-2xl font-bold mb-4 text-brandCuriousBlue">Deploy</h4>
                            <p className="text-slate-400 text-sm">Global roll-out with local domain assurance.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IndustriesPage;
