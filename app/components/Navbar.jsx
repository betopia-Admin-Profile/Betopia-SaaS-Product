"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Search } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 100);
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
        { name: 'About', path: '/about' },
        { name: 'Solutions', path: '/solutions' },
        { name: 'Industries', path: '/industries' },
        { name: 'Insights', path: '/insights' },
    ];

    return (
        <>
            {/* Main Navbar */}
            <nav className={`fixed z-[9999] transition-all duration-700 ease-out ${mounted && scrolled
                ? 'top-4 left-1/2 -translate-x-1/2 w-[95%] container mx-auto '
                : 'top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl'
                }`}>
                <div className={`w-full transition-all duration-700 ease-out rounded-full ${mounted && scrolled
                    ? 'bg-white shadow-lg shadow-black/5 py-3 px-6'
                    : 'bg-white backdrop-blur-md border border-white/10 py-3 px-6'
                    }`}>
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center cursor-pointer group select-none"
                        >
                            <img
                                src="/boomeringLogo.png"
                                alt="Boomering"
                                className={`transition-all duration-300 ${scrolled ? 'h-12' : 'h-12'
                                    } object-contain`}
                            />
                        </Link>

                        {/* Desktop Navigation + CTA (Right Aligned) */}
                        <div className="hidden lg:flex items-center space-x-2 ml-auto">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.path}
                                    className={`px-4 py-4 font-medium transition-all duration-200 text-sm tracking-wide rounded-full ${scrolled
                                        ? 'text-slate-700 hover:text-brandPurple hover:bg-slate-100'
                                        : 'text-slate-700 hover:text-brandPurple hover:bg-white/10'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            {/* CTA Button */}
                            <Link
                                href="/contact"
                                className="flex items-center px-6 py-2.5 rounded-full font-semibold text-sm tracking-wide text-white bg-linear-to-r from-brandPurple to-purple-600 hover:from-purple-600 hover:to-brandPurple transition-all duration-300 shadow-lg shadow-purple-500/20 ml-4"
                            >
                                Schedule a Meeting
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <div className="lg:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={`p-2.5 rounded-full transition-all duration-300 ${scrolled
                                    ? 'text-slate-900 hover:bg-slate-100'
                                    : 'text-white hover:bg-white/10'
                                    }`}
                                aria-label="Toggle menu"
                            >
                                <Menu size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {mounted && (
                <div
                    className={`lg:hidden fixed inset-0 z-[99999] transition-all duration-500 ease-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                        }`}
                >
                    {/* Backdrop */}
                    <div
                        className={`absolute inset-0 bg-slate-950/95 backdrop-blur-xl transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'
                            }`}
                        onClick={() => setIsOpen(false)}
                    ></div>

                    {/* Close button */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className={`fixed top-6 right-4 sm:right-6 p-2.5 rounded-xl bg-white text-slate-900 shadow-lg z-[100000] transition-all duration-300 delay-200 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                            }`}
                        aria-label="Close menu"
                    >
                        <X size={24} />
                    </button>

                    {/* Menu Panel */}
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
                                    className={`block text-3xl font-bold text-white hover:text-brandCuriousBlue transition-all duration-300 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
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
                                className="w-full flex justify-center py-4 rounded-full font-bold text-sm uppercase tracking-widest text-white bg-linear-to-r from-brandPurple to-brandCuriousBlue"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
