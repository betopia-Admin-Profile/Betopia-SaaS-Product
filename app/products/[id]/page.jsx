
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle2, Zap, ArrowRight, Shield, Globe, Layers, Lock, Cpu, Briefcase, Activity } from 'lucide-react';
import { PRODUCTS } from '../../data/products';

export async function generateMetadata({ params }) {
    const { id } = await params;
    const product = PRODUCTS.find((p) => p.id === id);
    if (!product) {
        return {
            title: 'Product Not Found',
        };
    }
    return {
        title: `${product.name} - Boomering Limited`,
        description: product.overview,
    };
}

const ProductDetailsPage = async ({ params }) => {
    const { id } = await params;
    const product = PRODUCTS.find((p) => p.id === id);

    if (!product) {
        notFound();
    }

    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-slate-100 text-slate-900 pt-40 pb-32 overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600 rounded-full blur-[120px] opacity-20"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600 rounded-full blur-[120px] opacity-20"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link
                        href="/#products"
                        className="inline-flex items-center text-slate-600 hover:text-blue-600 mb-8 transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Products
                    </Link>

                    <div className="max-w-4xl">
                        <span className="block text-blue-600 font-bold tracking-[0.2em] text-sm uppercase mb-4 animate-fadeIn">
                            {product.tagline}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
                            {product.name}
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mb-10">
                            {product.overview}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/contact"
                                className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-900/50 flex items-center"
                            >
                                {product.cta || 'Get Started'}
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                            <Link
                                href="/contact"
                                className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all border border-blue-700 flex items-center"
                            >
                                Request Demo
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-16">
                        <div className="w-full md:w-1/3">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Key Capabilities</h2>
                            <p className="text-slate-600 leading-relaxed mb-8">
                                Our solution is engineered to deliver enterprise-grade performance, scalability, and security from day one.
                            </p>
                            <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50">
                                <Zap className="w-10 h-10 text-yellow-500 mb-4" />
                                <h3 className="font-bold text-lg text-slate-900 mb-2">Instant Scale</h3>
                                <p className="text-slate-500 text-sm">Deploy rapidly with our modular architecture designed for high-growth environments.</p>
                            </div>
                        </div>

                        <div className="w-full md:w-2/3">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {product.features.map((feature, index) => (
                                    <div key={index} className="flex items-start p-6 bg-white rounded-xl border border-slate-100 hover:border-blue-100 hover:shadow-lg transition-all group">
                                        <div className="shrink-0 mt-1">
                                            <CheckCircle2 className="w-6 h-6 text-green-500 group-hover:scale-110 transition-transform" />
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                                {feature}
                                            </h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            {product.howItWorks && (
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
                            <p className="text-slate-500 text-lg">A streamlined process designed for maximum efficiency and minimal friction.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {product.howItWorks.map((step, index) => (
                                <div key={index} className="relative">
                                    <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 h-full hover:shadow-xl transition-shadow duration-300">
                                        <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl font-bold mb-6 shadow-lg shadow-blue-500/30">
                                            {index + 1}
                                        </div>
                                        <p className="text-slate-800 font-medium text-lg leading-relaxed">{step}</p>
                                    </div>
                                    {index < product.howItWorks.length - 1 && (
                                        <div className="hidden lg:block absolute top-12 -right-4 w-8 h-8 z-10 text-slate-300">
                                            <ArrowRight />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Use Cases & Industries */}
            {(product.useCases || product.industries) && (
                <section className="py-24 bg-slate-900 text-white relative">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            {/* Industries */}
                            {product.industries && (
                                <div>
                                    <div className="flex items-center space-x-3 mb-8">
                                        <Globe className="w-8 h-8 text-blue-400" />
                                        <h2 className="text-3xl font-bold">Target Industries</h2>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {product.industries.map((industry, i) => (
                                            <div key={i} className="flex items-center space-x-3 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                                                <Briefcase className="w-5 h-5 text-indigo-400" />
                                                <span className="font-medium text-slate-200">{industry}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Use Cases */}
                            {product.useCases && (
                                <div>
                                    <div className="flex items-center space-x-3 mb-8">
                                        <Activity className="w-8 h-8 text-emerald-400" />
                                        <h2 className="text-3xl font-bold">Top Use Cases</h2>
                                    </div>
                                    <ul className="space-y-4">
                                        {product.useCases.map((useCase, i) => (
                                            <li key={i} className="flex items-start">
                                                <div className="mt-1.5 w-2 h-2 rounded-full bg-emerald-400 mr-4 shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
                                                <span className="text-lg text-slate-300">{useCase}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            )}

            {/* Security & White Label */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Security */}
                        {product.security && (
                            <div className="bg-white p-10 rounded-4xl shadow-sm border border-slate-100">
                                <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                                    <Lock className="w-7 h-7 text-indigo-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Enterprise Security</h3>
                                <ul className="space-y-3">
                                    {product.security.map((item, i) => (
                                        <li key={i} className="flex items-center text-slate-600">
                                            <Shield className="w-4 h-4 text-indigo-500 mr-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* White Label */}
                        {product.whiteLabel && (
                            <div className="bg-linear-to-br from-blue-600 to-indigo-700 p-10 rounded-4xl shadow-xl text-white">
                                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                                    <Layers className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">White Label Ready</h3>
                                <p className="text-blue-100 mb-6">Fully customizable to match your brand identity.</p>
                                <div className="flex flex-wrap gap-2">
                                    {Object.keys(product.whiteLabel).map((key, i) => (
                                        <span key={i} className="bg-white/10 px-3 py-1 rounded-full text-sm font-medium border border-white/20">
                                            {key.replace(/([A-Z])/g, ' $1').trim()}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">Experience the Power of Intelligent Infrastructure</h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10">
                        We deliver innovative AI solutions and architect the intelligent infrastructure required for your long-term success.
                    </p>
                    {product.pricingModel && (
                        <div className="mb-10 inline-block bg-slate-100 px-6 py-2 rounded-full text-slate-600 font-semibold text-sm uppercase tracking-wide">
                            Pricing Model: {product.pricingModel}
                        </div>
                    )}
                    <br />
                    <Link
                        href="/contact"
                        className="inline-flex bg-slate-900 text-white px-10 py-5 rounded-full font-bold hover:bg-black transition-all hover:-translate-y-1 shadow-xl"
                    >
                        {product.cta || 'Contact Sales'}
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default ProductDetailsPage;
