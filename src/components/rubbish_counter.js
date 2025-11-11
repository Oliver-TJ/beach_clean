import React, { useState, useEffect } from "react";

const RubbishCounter = () => {
    const [isHovered, setIsHovered] = useState(false);
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

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`
                relative z-50 flex w-[90%] flex-col items-center rounded-lg bg-primary p-5 text-center text-white
                shadow-[8px_8px_0_#CBBD93] transition-all duration-500 ease-in-out lg:flex-row lg:p-5
                ${animateIn ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}
            `}
        >
            <div className="flex flex-col items-center lg:flex-row lg:flex-wrap">
                <div className="mb-2 p-2 text-2xl font-bold tracking-wider lg:mb-0 lg:mr-4 lg:p-4 lg:text-3xl">
                    Amount Cleaned (kg):
                </div>
                <div className="flex flex-wrap items-end justify-center">
                    {displayValue.split('').map((digit, index) =>
                        digit === '.' ? (
                            <div key={index} className="self-end bg-transparent px-0.5 py-1 text-4xl font-bold text-white animate-glow [animation-delay:0.75s]">
                                .
                            </div>
                        ) : (
                            <div
                                key={index}
                                className="
                                    m-1 rounded-md bg-black p-2.5 text-4xl font-bold text-white shadow-[0px_3px_0px_rgba(0,0,0,0.3)]
                                    animate-float animate-pulse animate-glow hover:animate-pause hover:-translate-y-0.5
                                    lg:p-3 lg:text-5xl
                                    odd:animation-delay-[0.5s] [&:nth-child(3n)]:animation-delay-[1s]
                                "
                            >
                                {digit}
                            </div>
                        )
                    )}
                </div>
            </div>

            <div
                className={`
                    absolute top-[110%] left-1/2 z-[100] w-[250px] -translate-x-1/2 rounded-lg border-2 border-accent
                    bg-primary p-5 text-left leading-relaxed text-accent shadow-lg transition-all duration-300
                    [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)]
                    after:absolute after:bottom-full after:left-1/2 after:-ml-2.5 after:border-[10px]
                    after:border-solid after:border-b-accent after:border-l-transparent after:border-r-transparent after:border-t-transparent
                    after:content-['']
                    ${isHovered ? 'visible opacity-100' : 'invisible opacity-0'}
                `}
            >
                <h3 className="mb-3 border-b-2 border-accent pb-2 text-center text-xl font-bold">
                    Latest Cleanup
                </h3>
                <p className="my-2 text-base">📍 {cleanupData.latestEvent.location}</p>
                <p className="my-2 text-base">📅 {new Date(cleanupData.latestEvent.date).toLocaleDateString()}</p>
                <p className="my-2 text-base">👥 {cleanupData.latestEvent.attendees} volunteers</p>
                <p className="my-2 text-base">🗑️ {cleanupData.latestEvent.collected} collected</p>
                <p className="my-2 text-base">📏 {cleanupData.latestEvent.distance} cleaned</p>
            </div>
        </div>
    );
};

export default RubbishCounter;
