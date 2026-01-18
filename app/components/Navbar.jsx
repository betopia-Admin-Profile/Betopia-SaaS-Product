"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const navLinks = [
        { name: 'About', path: '/' },
        { name: 'Solutions', path: '/solutions' },
        { name: 'Industries', path: '/industries' },
        { name: 'Insights', path: '/insights' },
    ];

    return (
        <nav className={`fixed w-full z-[100] transition-all duration-500 ease-in-out ${scrolled
            ? 'py-4 bg-white/90 backdrop-blur shadow-sm'
            : 'py-6 bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                <div className="flex justify-between items-center relative z-[101]">
                    {/* Replaced Logo */}
                    <Link
                        href="/"
                        className="flex items-center cursor-pointer group select-none hover:opacity-80 transition-opacity"
                    >
                        <div className='text-2xl font-bold text-emerald-500'>Betopia<span className="text-red-500">.</span></div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                className="px-5 py-2 text-slate-600 hover:text-blue-600 font-semibold transition-all duration-200 text-sm tracking-tight rounded-xl hover:bg-slate-50/50"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div className="w-px h-6 bg-slate-200 mx-4"></div>

                        <Link
                            href="/contact"
                            className="btn-neon-emerald flex items-center group px-6 py-2.5 rounded-full font-bold text-xs tracking-tight text-slate-900"
                        >
                            Schedule a Meeting
                            <div className="ml-3 w-6 h-6 bg-black rounded-full flex items-center justify-center text-white">
                                <ArrowRight className="w-3 h-3" />
                            </div>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden flex items-center space-x-4">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-xl transition-all relative z-[1000] ${isOpen ? 'bg-slate-900 text-white' : 'text-slate-900'}`}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden fixed inset-0 z-[500] transition-all duration-700 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}>
                <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-2xl z-[501]" onClick={() => setIsOpen(false)}></div>
                <div className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-slate-950 p-10 flex flex-col z-[502] transition-transform duration-700 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}>
                    <div className="flex-grow space-y-8 mt-20">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                onClick={() => setIsOpen(false)}
                                className="block text-4xl font-bold text-white hover:text-emerald-400 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div className="pt-8 border-t border-slate-900">
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="w-full btn-neon-emerald flex justify-center py-5 rounded-2xl font-black text-sm uppercase tracking-widest text-slate-900"
                        >
                            Schedule a Meeting
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
