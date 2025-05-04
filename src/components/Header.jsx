/*
function Header() {  
    return ( 
        <> 
        <header className="header">
            <img className="logo" src={Logo} alt="" />
            <Nav/>    
        </header> 
        </>  
    ); 
}  
export default Header;*/
import Logo from "../assets/img/Logo Cero Huella Horiz.png"
import "../styles/Header.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
                            <Nav.Link className="me-auto" href="#home">Home</Nav.Link>
                            <Nav.Link className="me-auto" href="#link">Link</Nav.Link>
                            <NavDropdown className="me-auto" title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    
    );
}

export default Header;