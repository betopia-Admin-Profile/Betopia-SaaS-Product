"use client";

import React, { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime;
        let animationFrame;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Easing function for smooth stop (easeOutExpo)
            const easeOut = (x) => x === 1 ? 1 : 1 - Math.pow(2, -10 * x);

            setCount(Math.floor(end * easeOut(percentage)));

            if (progress < duration) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, isVisible]);

    return (
        <span ref={countRef} className="tabular-nums">
            {count}{suffix}
        </span>
    );
};

const MetricCounter = () => {
    const metrics = [
        { label: "Years of Experience", value: 20, suffix: "+" },
        { label: "Projects Delivered", value: 500, suffix: "+" },
        { label: "Enterprise Clients", value: 150, suffix: "+" },
        { label: "Team Members", value: 200, suffix: "+" },
    ];

    return (
        <section className="py-20 bg-brandPurple text-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-brandCuriousBlue rounded-full blur-[100px]"></div>
                <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-brandCuriousBlue rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center divide-x divide-slate-400/50">
                    {metrics.map((metric, index) => (
                        <div key={index} className="flex flex-col items-center justify-center p-4">
                            <div className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-100 mb-2 font-sans tracking-tight">
                                <AnimatedCounter end={metric.value} suffix={metric.suffix} />
                            </div>
                            <p className="text-sm md:text-base font-md text-white tracking-widest">
                                {metric.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MetricCounter;
