import styled from "styled-components";
import backgroundImage from "../assets/bg_image.jpg";
import { createGlobalStyle } from "styled-components";

export const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #003a65;
    color: #fff;
`;

export const HeaderBox = styled.div`
  display: flex;
  padding: 1rem 3rem;
  text-decoration: none;
  font-size: 15px;
  color: #CBBD93;
  background: #003a65;
  box-shadow: 6px 6px 0 #CBBD93;
  transform: skewX(-15deg);
  border: none;
`;

export const Section = styled.div`
  padding: 1em;
  text-align: center;
`;

export const DescDiv = styled.div`
  font-size: 1.2rem; 
  color: white; 
  line-height: 1.8;
  margin-bottom: 30px;
`;


export const TextDiv = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  
  @media only screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;


export const TextContainer = styled.div`
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 96%;
  align-items: center;
  text-align: center;
  background-color: cornflowerblue;
  color: white;
  padding: 1rem;
  max-width: 70%;
  margin: 0 auto;
  border-left: 0.5rem solid #CBBD93;
  border-right: 0.5rem solid #CBBD93;
  bottom: 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  @media only screen and (max-width: 900px) {
    max-width: 100%;
    margin: 0;
  }
`;

export const IgContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
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
  opacity: 80%;
  z-index: -1;
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
    img {
      height: 20em;
      width: auto;
      border: 1em solid #CBBD93;
      border-radius: 2em;
      margin: 3em;
      box-shadow: 0 10px 14px rgba(0, 0, 0, 0.1);
      
      @media only screen and (max-width: 900px) {
        height: 15em;
        border: 0.5em solid #CBBD93;
        border-radius: 1em;
      }
      
      @media only screen and (max-width: 400px) {
        height: 10em;
        border: 0.25em solid #CBBD93;
        border-radius: 0.5em;
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
  list-style: none;
  gap: 1.5rem;
  
  @media (max-width: 900px) {
    display: ${({ isMenuOpen }) => (isMenuOpen ? "block" : "none")};
    z-index: 1;
    opacity: 100%;
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: #003a65;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 10px 20px;
  }
`;

export const NavLink = styled.li`
    a {
      color: #fff;
      text-decoration: none;
      font-size: 1rem;
      transition: color 0.3s ease;
      
      &:hover {
        color: #61dafb;
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