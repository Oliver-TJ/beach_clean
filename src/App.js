import './App.css';
import { NavbarContainer,
         Logo,
         NavLinks,
         NavLink,
         MenuIcon
} from "./components/home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import About from "./templates/about";
import Home from "./templates/home"
import Footer from "./templates/footer";
import LogoImg from "./assets/NUBCS_Logo.png"
import React, { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <NavbarContainer>
            <Logo>
                <Link to="/">
                    <img src={LogoImg} alt="Logo" />
                </Link>
            </Logo>
            <MenuIcon onClick={toggleMenu}>
                ☰
            </MenuIcon>
            <NavLinks isMenuOpen={isMenuOpen}>
                <NavLink>
                    <Link to="/"><b>About Us</b></Link>
                </NavLink>
                <NavLink>
                    <Link to="/about"><b>What's on?</b></Link>
                </NavLink>
            </NavLinks>
        </NavbarContainer>
    )
}

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
