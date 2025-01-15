import React from "react";
import { FooterContainer } from "../components/footer";

const Footer = () => {
    return (
        <FooterContainer>
            &copy; {new Date().getFullYear()} Oliver Taite Jupp. All rights reserved.
        </FooterContainer>
    );
};

export default Footer;