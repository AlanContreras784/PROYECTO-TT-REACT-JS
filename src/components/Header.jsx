import { NavLink } from "react-bootstrap";
import Logo from "../assets/img/Logo Cero Huella Horiz.png"
import "../styles/Header.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header ">
            <Navbar variant="dark" expand="lg" className="fs-5 py-0">
                <Container fluid >
                    <Navbar.Brand href="#home"><img className="logo" src={Logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav " />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className="me-auto nav-link" to="/PROYECTO-TT-REACT-JS">Home</Link>
                            <Link className="me-auto nav-link" to="/PROYECTO-TT-REACT-JS/ABOUTME">ACERCA DE MI</Link>
                            <Link className="me-auto nav-link" to="/PROYECTO-TT-REACT-JS/PRODUCTOS">PRODUCTOS</Link>
                            <Link className="me-auto nav-link" to="/PROYECTO-TT-REACT-JS/CONTACTO">CONTACTO</Link>
                            <Link className="me-auto nav-link" to="/PROYECTO-TT-REACT-JS/CARRITO">CARRITO</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    
    );
}

export default Header;