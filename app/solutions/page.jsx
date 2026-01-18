import React from 'react';
import { Cpu, Cloud, Shield, Database, Layout, Mail, Globe, ArrowRight, Zap, Play } from 'lucide-react';
import Link from 'next/link';
import { PRODUCTS } from '../data/products';

export const metadata = {
    title: 'Solutions | Boomering Limited',
    description: 'Explore our AI-driven solutions including Agentic AI, Cloud Managed Services, and Enterprise Software Systems.',
};

const SolutionsPage = () => {
    const mainSolutions = [
        {
            icon: <Cpu className="w-10 h-10" />,
            title: "Agentic AI",
            desc: "Next-gen digital tools that autonomously execute complex workflows, reducing operational overhead by 70%.",
            features: ["Autonomous Negotiations", "Workflow Automation", "Voice Intelligence"],
            link: "/products/agentic-ai",
            color: "text-blue-500",
            bg: "bg-blue-50"
        },
        {
            icon: <Cloud className="w-10 h-10" />,
            title: "Cloud Services",
            desc: "Hybrid and multi-cloud infrastructure management focused on 99.99% uptime and global scalability.",
            features: ["Infrastructure Management", "Disaster Recovery", "Cloud Migration"],
            link: "/products/cloud-managed-services",
            color: "text-brandPurple",
            bg: "bg-purple-50"
        },
        {
            icon: <Shield className="w-10 h-10" />,
            title: "Cyber Security",
            desc: "Absolute security architecture implementing zero-trust protocols and multi-layer encryption.",
            features: ["Data Residency", "Audit Intelligence", "End-to-end Encryption"],
            link: "/products/count-trust",
            color: "text-emerald-500",
            bg: "bg-emerald-50"
        },
        {
            icon: <Layout className="w-10 h-10" />,
            title: "Enterprise ERP",
            desc: "Custom-tailored ERP systems unifying finance, HR, and operations for modern scale.",
            features: ["Modular Architecture", "Real-time Analytics", "Supply Chain Control"],
            link: "/products/business-24x7",
            color: "text-orange-500",
            bg: "bg-orange-50"
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-white">
            {/* Header */}
            <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(48,158,196,0.15),transparent_50%)]"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="text-brandCuriousBlue font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Our Capabilities</span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight italic">Enterprise Scaling <br />Solutions</h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
                        We build the technical foundation that allows your business to innovate faster, scale globally, and remain resilient in a volatile digital landscape.
                    </p>
                </div>
            </section>

            {/* Main Solutions Overview */}
            <section className="py-32">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Strategic Focus Areas</h2>
                        <p className="text-slate-500 font-medium">Our core engineering pillars for digital transformation.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {mainSolutions.map((s, i) => (
                            <div key={i} className="group p-12 rounded-[3.5rem] border border-slate-100 bg-white hover:border-brandCuriousBlue/20 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col md:flex-row gap-10">
                                <div className={`w-20 h-20 shrink-0 rounded-3xl ${s.bg} flex items-center justify-center ${s.color} transition-transform group-hover:scale-110`}>
                                    {s.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">{s.title}</h3>
                                    <p className="text-slate-500 text-lg leading-relaxed mb-8 font-medium">{s.desc}</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                        {s.features.map((f, fi) => (
                                            <div key={fi} className="flex items-center space-x-3 text-sm font-bold text-slate-700">
                                                <div className="w-1.5 h-1.5 rounded-full bg-brandCuriousBlue"></div>
                                                <span>{f}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <Link href={s.link} className="inline-flex items-center font-bold text-brandCuriousBlue uppercase tracking-widest text-xs group/btn">
                                        View Category <ArrowRight className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Product Ecosystem Section */}
            <section className="py-32 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brandPurple/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-24">
                        <span className="text-brandPurple font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Product Ecosystem</span>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">Our Intelligent Software Stack</h2>
                        <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
                            A comprehensive suite of modular products designed to solve specific operational challenges at scale.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PRODUCTS.map((product) => (
                            <div key={product.id} className="group flex flex-col bg-white rounded-[3rem] border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-500 hover:-translate-y-2">
                                <div className="aspect-video bg-slate-50 relative overflow-hidden flex items-center justify-center p-8">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-contain filter drop-shadow-xl transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-black text-brandCuriousBlue uppercase tracking-widest border border-slate-200 shadow-sm">
                                        Ecosystem Tool
                                    </div>
                                </div>
                                <div className="p-10 flex flex-col flex-1">
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-brandCuriousBlue transition-colors">{product.name}</h3>
                                        <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6 line-clamp-2">
                                            {product.overview}
                                        </p>
                                        <div className="space-y-3 mb-8">
                                            {product.features.slice(0, 3).map((feature, idx) => (
                                                <div key={idx} className="flex items-center text-xs font-bold text-slate-600">
                                                    <Zap className="w-3 h-3 text-brandCuriousBlue mr-2 shrink-0" />
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <Link
                                        href={`/products/${product.id}`}
                                        className="w-full py-4 bg-slate-50 text-slate-900 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-brandCuriousBlue hover:text-white transition-all text-center flex items-center justify-center group/btn"
                                    >
                                        View technical specs
                                        <Play className="ml-2 w-3 h-3 fill-current" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ecosystem CTA */}
            <section className="py-32">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto rounded-[4rem] bg-brandPurple p-12 md:p-20 text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-brandCuriousBlue/20 rounded-full blur-[100px] transition-all group-hover:scale-125"></div>
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-none text-white">Custom Software <br />Engineering</h2>
                                <p className="text-purple-100 text-lg leading-relaxed mb-8 font-medium opacity-80">
                                    Need a bespoke solution tailored to your unique operational flow? Our engineers specialize in high-load, mission-critical systems.
                                </p>
                                <Link href="/contact" className="inline-flex px-8 py-4 bg-white text-brandPurple rounded-full font-bold text-sm tracking-widest uppercase hover:bg-slate-50 transition-colors">
                                    Schedule Consultation
                                </Link>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                    <Database className="w-8 h-8 mb-4 text-brandCuriousBlue" />
                                    <h4 className="font-bold mb-2">Scalable Tech</h4>
                                    <p className="text-xs text-purple-200">Built for millions.</p>
                                </div>
                                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                    <Globe className="w-8 h-8 mb-4 text-brandCuriousBlue" />
                                    <h4 className="font-bold mb-2">Global Ops</h4>
                                    <p className="text-xs text-purple-200">Dhaka to the world.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SolutionsPage;

