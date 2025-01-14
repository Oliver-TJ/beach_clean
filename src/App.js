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

const Navbar = () => {
    return (
        <NavbarContainer>
            <Logo>Beach Clean Society</Logo>
            <NavLinks>
                <NavLink>
                    <Link to="/">Home</Link>
                </NavLink>
                <NavLink>
                    <Link to="/about">About</Link>
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
