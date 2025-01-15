import styled from "styled-components";
import backgroundImage from "../assets/bg_image.jpg";

export const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #003a65;
    color: #fff;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  text-align: center;
  background-color: cornflowerblue;
  color: white;
  padding: 1rem;
  max-width: 70%;
  margin: 0 auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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

export const NavLinks = styled.ul`
    display: flex;
    list-style: none;
    gap: 1.5rem;
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