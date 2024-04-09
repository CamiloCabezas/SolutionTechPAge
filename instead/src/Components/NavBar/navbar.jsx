import { Link } from "react-router-dom";
import "../NavBar/navBarStyles.css";
import { useState } from "react";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openNav = () => {
        setIsMenuOpen(true);

    }

    const closeNav = () => {
        setIsMenuOpen(false);
    }

    return (
        <div>
            <header className="header">
                <div className="logo">
                    <img src="https://st2.depositphotos.com/2172301/6856/v/950/depositphotos_68561517-stock-illustration-logo-of-information-technology.jpg" alt="Logo Empresa" />
                </div>
                <nav>
                    <ul className="nav-links">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/Services">Servicios</Link></li>
                        <li><Link to="/proyectos">Proyectos</Link></li>
                    </ul>   
                </nav>
                <Link to="/Contacto"><button className="btn">Contactanos</button></Link>

                <Link className="menu" onClick={openNav}><button>Menu</button></Link>

                <div className={`overlay ${isMenuOpen ? "open" : ""}`} id={isMenuOpen ? "mobile-menuOpen" : "mobile-menuClose"}>
                    <Link onClick={closeNav} className="close" href="#">&times;</Link>
                    <div className="overlay-content">
                        <Link to="/home">Home</Link>
                        <Link to="/Services">Servicios</Link>
                        <Link to="/proyectos">Proyectos</Link>
                        <Link to="/Contacto">Contactenos</Link>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default NavBar;
