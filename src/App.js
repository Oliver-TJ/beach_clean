import './App.css';
import { NavbarContainer,
         Logo,
         NavLinks,
         NavLink
} from "./components/home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import About from "./templates/about";
import Home from "./templates/home"
import LogoImg from "./assets/NUBCS_Logo.png"

const Navbar = () => {
    return (
        <NavbarContainer>
            <Logo>
                <Link to="/">
                    <img src={LogoImg} alt="Logo" />
                </Link>
            </Logo>
            <NavLinks>
                <NavLink>
                    <Link to="/"><b>Home</b></Link>
                </NavLink>
                <NavLink>
                    <Link to="/about"><b>About Us</b></Link>
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
    </Router>
  );
}

export default App;
