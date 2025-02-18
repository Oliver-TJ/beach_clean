import React from "react";
import {
    FooterContainer,
    InstagramIcon,
    EmailIcon,
    SocialContainer,
    SocialLink,
    GitHubIcon
} from "../components/footer";


const Footer = () => {
    return (
        <FooterContainer>
            <SocialContainer>
                <SocialLink
                    href="https://www.instagram.com/beachcleaningsociety__ncl"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                >
                    <InstagramIcon />
                </SocialLink>

                <SocialLink
                    href="mailto:beachcleaningsociety@outlook.com"
                    aria-label="Email"
                >
                    <EmailIcon />
                </SocialLink>
                <SocialLink
                    href="https://github.com/Oliver-TJ/beach_clean"
                    aria-label="Github"
                    >
                    <GitHubIcon />
                </SocialLink>
            </SocialContainer>
            <i>&copy; {new Date().getFullYear()} Oliver Taite Jupp. All rights reserved.</i>
        </FooterContainer>
    );
};

export default Footer;