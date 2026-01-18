"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Ensure component is mounted before rendering dynamic content
    useEffect(() => {
        setMounted(true);
    }, []);

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
        <>
            {/* Main Navbar */}
            <nav className={`fixed w-full z-[9999] transition-all duration-500 ease-in-out ${mounted && scrolled
                ? 'py-4 bg-white/90 backdrop-blur shadow-sm'
                : 'py-6 bg-transparent'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
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
                                className="p-2.5 rounded-xl transition-all duration-300 text-slate-900 hover:bg-slate-100"
                                aria-label="Toggle menu"
                            >
                                <Menu size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu with smooth slide animation */}
            {mounted && (
                <div
                    className={`lg:hidden fixed inset-0 z-[99999] transition-all duration-500 ease-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                        }`}
                >
                    {/* Backdrop with fade */}
                    <div
                        className={`absolute inset-0 bg-slate-950/95 backdrop-blur-xl transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'
                            }`}
                        onClick={() => setIsOpen(false)}
                    ></div>

                    {/* Close button with fade */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className={`fixed top-6 right-4 sm:right-6 p-2.5 rounded-xl bg-white text-slate-900 shadow-lg z-[100000] transition-all duration-300 delay-200 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                            }`}
                        aria-label="Close menu"
                    >
                        <X size={24} />
                    </button>

                    {/* Menu Panel - slides from right */}
                    <div
                        className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-slate-950 p-10 flex flex-col shadow-2xl transition-transform duration-500 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                            }`}
                    >
                        <div className="flex-grow space-y-8 mt-24">
                            {navLinks.map((link, index) => (
                                <Link
                                    key={link.name}
                                    href={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block text-4xl font-bold text-white hover:text-emerald-400 transition-all duration-300 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                                        }`}
                                    style={{ transitionDelay: isOpen ? `${150 + index * 75}ms` : '0ms' }}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <div
                            className={`pt-8 border-t border-slate-800 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                }`}
                            style={{ transitionDelay: isOpen ? '450ms' : '0ms' }}
                        >
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
            )}
        </>
    );
};

export default Navbar;
