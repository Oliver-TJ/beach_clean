import styled from "styled-components"

export const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #003a65;
    color: #fff;
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