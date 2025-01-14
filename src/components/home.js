import React from "react"
import styled from "styled-components"

export const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #282c34;
    color: #fff;
`;

export const Logo = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
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