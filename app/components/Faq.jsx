"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Plus } from 'lucide-react';

const FAQS = [
    {
        question: "How does Boomering determine engagement models?",
        answer: "We offer flexible engagement models tailored to enterprise needs: Dedicated Teams for long-term scalability, Fixed Price for defined project scopes, and Time & Materials for evolving requirements. We start with a discovery phase to recommend the optimal structure."
    },
    {
        question: "What security standards do you comply with?",
        answer: "Our infrastructure is ISO 27001 certified. We are fully compliant with GDPR, HIPAA, and SOC 2 Type II standards. All data is encrypted at rest and in transit using enterprise-grade 256-bit encryption protocols."
    },
    {
        question: "Can you takeover existing legacy codebases?",
        answer: "Yes. Our 'Rescue & Refactor' squad specializes in auditing, documenting, and stabilizing legacy systems before progressively modernizing them. We ensure zero downtime during the transition process."
    },
    {
        question: "Where is your engineering team located?",
        answer: "Our primary engineering hub is in Dhaka, Bangladesh, providing a highly skilled talent pool at a competitive cost advantage. We also maintain satellite offices in London and New York for client management and solution architecture."
    },
    {
        question: "Do you offer post-deployment support?",
        answer: "Absolutely. We provide Tier-1 to Tier-3 support packages including 24/7 monitoring, SLA-backed response times, and continuous feature enhancements to ensure your software remains future-proof."
    }
];

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-slate-200/60 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-8 flex items-center justify-between text-left group"
            >
                <span className={`text-xl md:text-2xl font-bold transition-colors ${isOpen ? 'text-blue-600' : 'text-slate-900 group-hover:text-slate-700'}`}>
                    {question}
                </span>
                <span className={`ml-6 shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-blue-600 text-white rotate-45' : 'bg-white border border-slate-200 text-slate-400 group-hover:border-blue-200 group-hover:text-blue-600'}`}>
                    <Plus className="w-5 h-5" />
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-8' : 'max-h-0 opacity-0'
                    }`}
            >
                <p className="text-slate-500 text-lg leading-relaxed max-w-3xl">
                    {answer}
                </p>
            </div>
        </div>
    );
};

const Faq = () => {
    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
                        <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.5em] mb-4 block">Knowledge Base</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-wide leading-none mb-6">Frequently Asked Questions</h2>
                        <p className="text-slate-500 text-lg leading-snug mb-10">
                            Common questions about our deployment process, security standards, and partnership opportunities.
                        </p>
                        <Link
                            href="/contact"
                            className="text-slate-900 font-bold flex items-center group"
                        >
                            Still have questions? <span className="ml-2 text-blue-600 group-hover:underline">Contact Sales</span>
                        </Link>
                    </div>
                    <div className="lg:col-span-8">
                        <div className="bg-slate-50/50 rounded-[2.5rem] p-8 md:p-10 border border-slate-100">
                            {FAQS.map((faq, i) => (
                                <FAQItem key={i} question={faq.question} answer={faq.answer} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
