
import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-16">
            <div className="max-w-7xl mx-auto px-4 md:px-0">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="space-y-4">
                        <div className="text-2xl font-bold text-white tracking-tight">
                            <Link href="/">
                                <img src="/boomeringWhiteLogo.png" alt="" className="w-46" />
                            </Link>
                        </div>
                        <p className="text-sm leading-relaxed">
                            Global AI & Cloud Software Company providing enterprise-grade, secure, and scalable solutions from Bangladesh to the world.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social icons could go here */}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Platforms</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/solutions" className="hover:text-white transition-colors">Our Solutions</Link></li>
                            <li><Link href="/industries" className="hover:text-white transition-colors">Industries</Link></li>
                            <li><Link href="/insights" className="hover:text-white transition-colors">Technical Insights</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Core Products</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/products/agentic-ai" className="hover:text-white transition-colors">Agentic AI</Link></li>
                            <li><Link href="/products/tolkora-ai" className="hover:text-white transition-colors">Tolkora AI</Link></li>
                            <li><Link href="/products/edu-os" className="hover:text-white transition-colors">EduOS</Link></li>
                            <li><Link href="/products/care-os" className="hover:text-white transition-colors">CareOS</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-3 text-sm">
                            <li>Dhaka, Bangladesh</li>
                            <li>Global Delivery Hubs</li>
                            <li>info@boomering.com</li>
                            <li>+880 123 456 789</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
                    <p>© {new Date().getFullYear()} Boomering Limited. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Security Standards</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
