import React, { useState, useEffect } from "react";
import SocietyLogo from "../assets/NUBCS_Logo.png";

const RubbishCounter = () => {
    const [isActive, setIsActive] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [animateIn, setAnimateIn] = useState(false);
    const [displayValue, setDisplayValue] = useState("0.0");

    const cleanupData = {
        total: "176.5",
        latestEvent: {
            location: "Long Sands Beach, Tynemouth",
            date: "2025-10-11",
            attendees: 58,
            collected: "23kg",
            distance: "2.6km"
        }
    };

    const finalValue = cleanupData.total;

    // Effect to detect mobile screen size
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768); // Tailwind's 'md' breakpoint
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => setAnimateIn(true), 300);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (animateIn) {
            const startValue = 0;
            const endValue = parseFloat(finalValue);
            const duration = 2000;
            const frameRate = 60;
            const totalFrames = (duration / 1000) * frameRate;
            const increment = endValue / totalFrames;
            let currentValue = startValue;
            let frame = 0;

            const counter = setInterval(() => {
                frame++;
                currentValue += increment;
                if (frame <= totalFrames) {
                    setDisplayValue(currentValue.toFixed(1));
                } else {
                    setDisplayValue(finalValue);
                    clearInterval(counter);
                }
            }, 2000 / frameRate);

            return () => clearInterval(counter);
        }
    }, [animateIn, finalValue]);

    // Define interaction handlers based on device type
    const interactionProps = isMobile
        ? { onClick: () => setIsActive(prevState => !prevState) }
        : {
            onMouseEnter: () => setIsActive(true),
            onMouseLeave: () => setIsActive(false),
          };

    return (
        <div
            {...interactionProps}
            className={`
                group relative z-50 flex w-full max-w-6xl cursor-pointer flex-col items-center gap-4 rounded-xl 
                border border-accent/30 bg-primary/80 p-6 text-center text-white shadow-2xl backdrop-blur-sm 
                transition-all duration-500 ease-in-out
                md:flex-row md:justify-between md:gap-8
                active:brightness-125
                ${animateIn ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}
            `}
        >
            <img 
                src={SocietyLogo} 
                alt="Society Logo" 
                className="h-auto w-full max-w-[200px] md:max-w-[280px]" 
            />
            
            <div className="flex flex-col items-center gap-2">
                <div className="text-xl font-bold tracking-wider text-accent md:text-2xl">
                    Total Cleaned (kg):
                </div>
                
                <div className="flex flex-wrap items-end justify-center">
                    {displayValue.split('').map((digit, index) =>
                        digit === '.' ? (
                            <div key={index} className="self-end bg-transparent px-1 py-1 text-4xl font-bold text-white animate-glow [animation-delay:0.75s] md:text-5xl">
                                .
                            </div>
                        ) : (
                            <div
                                key={index}
                                className={`
                                    m-1 rounded-md bg-black/50 p-2.5 text-4xl font-bold text-white shadow-md transition-all duration-300
                                    animate-glow md:p-3 md:text-5xl
                                    odd:animation-delay-[0.5s] [&:nth-child(3n)]:animation-delay-[1s]
                                    ${isActive ? '-translate-y-1.5 scale-110 shadow-xl shadow-accent/20' : ''}
                                `}
                            >
                                {digit}
                            </div>
                        )
                    )}
                </div>
            </div>

            <div
                className={`
                    absolute top-[105%] left-1/2 z-[100] w-[280px] -translate-x-1/2 rounded-lg border border-accent/30
                    bg-primary p-5 text-left leading-relaxed text-accent shadow-2xl
                    transition-all duration-300 ease-in-out
                    after:absolute after:bottom-full after:left-1/2 after:-ml-2.5 after:border-[10px]
                    after:border-solid after:border-b-accent after:border-l-transparent after:border-r-transparent after:border-t-transparent
                    after:content-['']
                    ${isActive ? 'visible scale-100 opacity-100' : 'invisible scale-95 opacity-0'}
                `}
            >
                <h3 className="mb-4 border-b-2 border-accent/50 pb-2 text-center text-xl font-bold text-white">
                    Latest Cleanup
                </h3>
                <div className="space-y-3 text-base">
                    <p className="flex items-center"><span className="mr-3 w-5 text-center">📍</span> {cleanupData.latestEvent.location}</p>
                    <p className="flex items-center"><span className="mr-3 w-5 text-center">📅</span> {new Date(cleanupData.latestEvent.date).toLocaleDateString()}</p>
                    <p className="flex items-center"><span className="mr-3 w-5 text-center">👥</span> {cleanupData.latestEvent.attendees} volunteers</p>
                    <p className="flex items-center"><span className="mr-3 w-5 text-center">🗑️</span> {cleanupData.latestEvent.collected} collected</p>
                    <p className="flex items-center"><span className="mr-3 w-5 text-center">📏</span> {cleanupData.latestEvent.distance} cleaned</p>
                </div>
            </div>
        </div>
    );
};

export default RubbishCounter;
