import React from "react";
import { JoinButton } from "../components/join_button";
import { InstagramEmbed } from "react-social-media-embed";
import RubbishCounter from "../components/rubbish_counter";
import "./home.css";
import CoverImage from "../assets/cover_img.jpg";
import backgroundImage from "../assets/bg_image.jpg";
import YouTube from "react-youtube";

const EventLink = ({ href, children }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold text-accent underline transition-all duration-300 ease-in-out hover:rounded-md hover:bg-accent hover:p-1 hover:text-primary hover:no-underline"
    >
        {children}
    </a>
);

const SectionHeader = ({ children }) => (
    <div className="inline-flex justify-center bg-primary px-6 py-3 text-lg text-accent shadow-[6px_6px_0_#CBBD93] [-skew-x-12deg] md:px-8 md:py-4 md:text-xl">
        <h2 className="m-0 font-bold [skew-x-12deg]">{children}</h2>
    </div>
);

const Home = () => {
    return (
        <div className="w-full">
            {/* Background Image */}
            <div
                style={{ backgroundImage: `url(${backgroundImage})` }}
                className="fixed top-0 left-0 -z-10 h-screen w-screen bg-cover bg-center bg-fixed opacity-90 grayscale-[20%]"
            />

            {/* Main Content Container with improved padding and width */}
            <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-center overflow-visible border-x-2 border-accent bg-background/95 px-4 py-12 text-white shadow-2xl sm:px-6 md:border-x-4 md:py-16 lg:px-12 lg:py-24">
                
                {/* Wrapper for consistent vertical spacing between sections */}
                <div className="flex w-full flex-col items-center space-y-20 md:space-y-24 lg:space-y-32">

                    <RubbishCounter />

                    <div className="w-full max-w-6xl rounded-2xl border border-accent/30 bg-primary/80 p-4 shadow-2xl backdrop-blur-sm sm:p-6 md:p-8 lg:p-12">
                        <section className="grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
                            <div className="flex flex-col space-y-5">
                                <SectionHeader>Our New Partners</SectionHeader>
                                <div className="text-base italic text-accent md:text-lg">10th November 2025</div>
                                <p className="text-left text-base leading-relaxed md:text-lg">
                                    We've teamed up with <b><EventLink href="https://www.gvi.co.uk/">gvitravel</EventLink></b> to offer conservation opportunities to our members! Here's a bit more about who they are, what they do and why we've partnered with them 🌊
                                </p>
                                <p className="text-left text-base leading-relaxed md:text-lg">
                                    For over 25 years, GVI has been an award-winning leader in impactful field training, empowering a global alumni network of over 40,000 people 🌎 They specialise in helping students gain the hands-on skills needed to build impact-driven careers and land their dream role in conservation.
                                </p>
                                <ul className="space-y-3 text-left text-base md:text-lg">
                                    <li className="flex items-start"><span className="mr-3 text-accent">✔</span> You could live at a remote research hub, taking part in vital conservation activities every day.</li>
                                    <li className="flex items-start"><span className="mr-3 text-accent">✔</span> Programs are highly flexible (2-24 weeks), perfect for a summer break, placement year, or post-graduation plan.</li>
                                    <li className="flex items-start"><span className="mr-3 text-accent">✔</span> Join GVI in incredible locations like South Africa, Seychelles, Costa Rica, Madagascar, Peru, and beyond!</li>
                                </ul>
                                <div className="my-4 rounded-lg bg-accent p-5 text-left text-primary shadow-lg md:p-6">
                                    <p className="text-base font-semibold leading-relaxed md:text-lg">
                                        As part of our partnership, NUBCS members get an exclusive grant of up to £10,000, which could cover up to 80% of your program fees!
                                    </p>
                                    <div className="mt-4 text-center">
                                        <span className="text-xs font-medium uppercase md:text-sm">Use our unique grant code to apply</span>
                                        <div className="mt-1 rounded-md border-2 border-dashed border-primary/50 bg-white/50 p-2 text-xl font-bold tracking-widest text-primary md:text-2xl">
                                            NCS-BCSOC
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="transform text-center transition-transform duration-500 ease-in-out hover:scale-105">
                                <div className="relative mx-auto w-full overflow-hidden rounded-xl bg-black [padding-top:56.25%] shadow-2xl shadow-accent/20">
                                    <YouTube
                                        videoId="n2q2ZGbZ7M0"
                                        className="absolute top-0 left-0 h-full w-full"
                                        opts={{ height: '100%', width: '100%', playerVars: { autoplay: 0, loop: 1 } }}
                                    />
                                </div>
                                <i className="mt-4 inline-block text-sm text-accent">GVI Travel offer environmental protection and community programs</i>
                            </div>
                        </section>
                    </div>

                    {/* About Us & Instagram Section */}
                    <section className="grid w-full max-w-6xl grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
                        <div className="flex flex-col space-y-5">
                            <SectionHeader>About Us</SectionHeader>
                            <p className="text-left text-base leading-relaxed md:text-lg">
                                Welcome to the Beach Cleaning Society Website! We are a passionate group of environmental activists dedicated to preserving and protecting the beautiful Tyne and Wear coastline.
                            </p>
                            <p className="text-left text-base leading-relaxed md:text-lg">
                                Our mission is to organise regular beach cleaning events to reduce waste and protect marine ecosystems from harmful pollution. We aim to hold at least two beach cleaning meetings each semester, and we always hope for sunny weather!
                            </p>
                            <div className="my-4 rounded-lg border border-accent/50 bg-accent/10 p-5 text-left text-base leading-relaxed md:p-6 md:text-lg">
                                Each location is conveniently accessible by Metro, making it easy for everyone to participate. Membership costs <strong className="font-semibold text-accent">only £5</strong> - join us and help make a real difference!
                            </div>
                        </div>
                        <div className="mx-auto w-full max-w-sm">
                            <InstagramEmbed url="https://www.instagram.com/beachcleaningsociety__ncl" width="100%" />
                        </div>
                    </section>

                    {/* Our Story Section - now a two-column layout on desktop */}
                    <section className="grid w-full max-w-6xl grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
                        <div className="relative order-last lg:order-first">
                            <img
                                src={CoverImage}
                                alt="Beach clean committee"
                                className="h-auto w-full rounded-2xl border-4 border-accent shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:rotate-[-1deg] md:border-8"
                            />
                        </div>
                        <div className="flex flex-col space-y-5">
                            <SectionHeader>Our Story</SectionHeader>
                            <p className="text-left text-base leading-relaxed md:text-lg">
                                It all began with a simple yet powerful idea: to protect the stunning coastline of Tyne and Wear while creating pristine, enjoyable beaches for both wildlife and people.
                            </p>
                            <p className="text-left text-base leading-relaxed md:text-lg">
                                What started as a small initiative quickly grew into a vibrant university society driven by shared passion for sustainability and community action.
                            </p>
                            <div className="my-4 rounded-lg border border-accent/50 bg-accent/10 p-5 text-left text-base leading-relaxed md:p-6 md:text-lg">
                                But we're more than just beach cleans! Our society is all about fostering connections and having fun. We host a variety of exciting socials, from the hilarity of Pub Golf to the cozy chaos of Pajama Bowling nights. Whether you’re passionate about the environment or just looking to meet new friends, our society offers the perfect mix of purpose and fun.
                            </div>
                            <div className="pt-4">
                                <JoinButton />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Home;