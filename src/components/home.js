import styled from "styled-components";
import backgroundImage from "../assets/bg_image.jpg";
import { createGlobalStyle } from "styled-components";
import YouTube from "react-youtube";

const colors = {
    primary: "#003a65",
    accent: "#CBBD93",
    white: "#FFFFFF",
    background: "#6495ed",
};

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${colors.primary};
  color: ${colors.white};
  position: relative;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const HeaderBox = styled.div`
  display: inline-flex;
  justify-content: center;
  padding: 1.25rem 2.5rem;
  font-size: 1.1rem;
  color: ${colors.accent};
  background: ${colors.primary};
  box-shadow: 6px 6px 0 ${colors.accent};
  transform: skewX(-15deg);
  transition: transform 0.3s ease;
  margin: 2rem 0;

  h2 {
    margin: 0;
    transform: skewX(15deg);
  }

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
    transform: skewX(-8deg);
    margin: 1.5rem 0;
    
    h2 {
      transform: skewX(8deg);
      font-size: 1.2rem;
    }
  }
`;

export const Section = styled.section`
  padding: 2rem 1em;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1.5rem 0.5em;
  }
`;


export const DescDiv = styled.div`
  font-size: 1.1rem;
  color: ${colors.white};
  line-height: 1.7;
  margin-bottom: 1.5rem;
  text-align: justify;

  strong {
    color: ${colors.accent};
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.2rem;
  }
`;


export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  margin: 0 auto;
  max-width: 1400px;

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;


export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.background};
  color: ${colors.white};
  padding: 2rem;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  border-left: 0.5rem solid ${colors.accent};
  border-right: 0.5rem solid ${colors.accent};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 85%;
    padding: 1.5rem;
    margin: 0 auto;
    border-width: 0.35rem;
  }
`;

export const IgContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  opacity: 0.9;
  z-index: -1;
  filter: grayscale(20%);
`;

export const Logo = styled.div`
    img {
      height: 4em;
      width: auto;
      transition: 0.3s ease;
      
      &:hover {
        opacity: 70%;
      }
    }
`;

export const CoverImg = styled.div`
  position: relative;
  flex-shrink: 0;

  img {
    height: auto;
    width: 100%;
    max-width: 500px;
    border: 0.75rem solid ${colors.accent};
    border-radius: 1.5rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    @media (max-width: 1024px) {
      max-width: 400px;
      border-width: 0.5rem;
    }

    @media (max-width: 768px) {
      max-width: 300px;
      border-width: 0.35rem;
      border-radius: 1rem;
    }
  }
`;

export const FontStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..700;1,100..700&display=swap');

  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    right: 0;
    flex-direction: column;
    background: ${colors.primary};
    min-width: 200px;
    transform: ${({ isMenuOpen }) =>
            isMenuOpen ? "translateY(0)" : "translateY(-10px)"};
    opacity: ${({ isMenuOpen }) => (isMenuOpen ? 1 : 0)};
    visibility: ${({ isMenuOpen }) => (isMenuOpen ? "visible" : "hidden")};
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    border-radius: 0.5rem;
    padding: 1rem;
  }
`;

export const NavLink = styled.li`
  a {
    color: ${colors.white};
    text-decoration: none;
    font-weight: 500;
    transition: all 0.2s ease;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      background: ${colors.accent};
      transition: width 0.3s ease;
    }

    &:hover {
      color: ${colors.accent};

      &::after {
        width: 100%;
      }
    }
  }
`;
export const MenuIcon = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;
  
  @media (max-width: 900px) {
    display: block;
  }
`;

export const EventLink = styled.a`
  color: #CBBD93;
  text-decoration: underline;
  font-weight: bold;
  transition: all 0.3s ease;
  
  &:hover {
    color: #003a65;
    text-decoration: none;
    background-color: #CBBD93;
    padding: 1px 2px;
    border-radius: 4px;
  }
`;

export const PageHeader = styled.h1`
  color: #CBBD93;
  font-size: 2.8rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin: 2rem 0;
  padding: 1rem;
  position: relative;
  text-shadow: 2px 2px 0 rgba(0, 58, 101, 0.5);
  
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 3px;
    background: #003a65;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
    letter-spacing: 2px;
    
    &::after {
      width: 80%;
    }
  }
`;


export const EventCardContainer = styled.div`
  background: #003a65;
  border: 2px solid #CBBD93;
  margin: 2rem auto;
  padding: 1.5rem;
  position: relative;
  box-shadow: 6px 6px 0 #CBBD93;
  transform-style: preserve-3d;
  width: 90%;
  max-width: 800px;

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: rgba(0, 58, 101, 0.1);
    transform: skewX(-5deg) skewY(-1deg);
    z-index: -1;
  }

  @media (max-width: 900px) {
    width: 95%;
    padding: 1rem;
    margin-left: -0.7em;
  }
`;

export const EventHeader = styled(HeaderBox)`
  margin: -2rem auto 1.5rem;
  width: fit-content;
  font-size: 1.3rem;
  transform: skewX(-10deg);
  padding: 1rem 2.5rem;
  
  h3 {
    margin: 0;
    font-size: 1.4rem;
  }

  @media (max-width: 768px) {
    margin: -1.5rem auto 1rem;
    padding: 0.8rem 2rem;
    transform: skewX(-8deg);
    
    h3 {
      font-size: 1.2rem;
    }
  }
`;

export const EventDate = styled.div`
  color: #CBBD93;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  font-style: italic;
  text-align: center;
`;

export const EventDescription = styled(DescDiv)`
  font-size: 1.1rem;
  line-height: 1.6;
  padding: 0 1.5rem;
  
  @media (max-width: 768px) {
    padding: 0 0.5rem;
    font-size: 1rem;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  
  @media (max-width: 778px) {
    padding: 0.25em;
  }
`;


export const ContentSection = styled.div`
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 900px) {
    padding: 1rem;
    text-align: justify;
  }
`;

export const ResponsiveInstagramWrapper = styled.div`
  width: 100%;
  max-width: 328px;
  margin: 1rem auto;
  padding: 0 1rem;
  
  @media (max-width: 480px) {
    padding: 0;
  }
`;


export const JoinButtonWrapper = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  
  @media (max-width: 480px) {
    margin: 1.5rem 0;
  }
`;


export const DescDivs = styled(DescDiv)`
  ${({ highlight }) => highlight && `
    background: rgba(203, 189, 147, 0.1);
    padding: 1.5rem;
    border-radius: 8px;
    margin: 2rem 0;
    
    @media (max-width: 768px) {
      padding: 1rem;
      margin: 1.5rem 0;
    }
  `}
`;


export const YouTubePlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
  width: 100%;
  margin: 1rem auto;
  background-color: #000;

  border: 4px solid ${colors.accent}; 
  border-radius: 12px;
  box-shadow: 6px 6px 0 ${colors.accent}; 
  overflow: hidden;

  @media (max-width: 768px) {
    border-width: 3px;
    border-radius: 8px;
    box-shadow: 4px 4px 0 ${colors.accent};
  }
`;


export const StyledYouTube = styled(YouTube)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
