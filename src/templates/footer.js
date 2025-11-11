import React from "react";
// We only need to import the SVG icons now
import { InstagramIcon, EmailIcon, GitHubIcon } from "../components/footer";

const Footer = () => {
    return (
        // This replaces <FooterContainer>
        <footer className="w-full bg-primary py-5 text-center text-sm text-white flex flex-col gap-4">
            
            {/* This replaces <SocialContainer> */}
            <div className="flex justify-center gap-6 mt-2.5">
                
                {/* This replaces <SocialLink> */}
                <a
                    href="https://www.instagram.com/beachcleaningsociety__ncl"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-accent inline-flex items-center transition-all duration-300 ease-in-out hover:text-white hover:-translate-y-0.5"
                >
                    <InstagramIcon />
                </a>

                <a
                    href="mailto:beachcleaningsociety@outlook.com"
                    aria-label="Email"
                    className="text-accent inline-flex items-center transition-all duration-300 ease-in-out hover:text-white hover:-translate-y-0.5"
                >
                    <EmailIcon />
                </a>

                <a
                    href="https://github.com/Oliver-TJ/beach_clean"
                    aria-label="Github"
                    className="text-accent inline-flex items-center transition-all duration-300 ease-in-out hover:text-white hover:-translate-y-0.5"
                >
                    <GitHubIcon />
                </a>
            </div>

            <i>&copy; {new Date().getFullYear()} Oliver Taite Jupp. All rights reserved.</i>
        </footer>
    );
};

export default Footer;