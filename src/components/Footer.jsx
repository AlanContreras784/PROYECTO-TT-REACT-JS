import "../styles/Footer.css";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import logoFooter from '../assets/img/logo_cero_huella.png'

function Footer() {  
    return (  
        <footer className="footer py-4"> 
            <img className="pt-3 img-footer" src={logoFooter} alt="" /> 
            <address className="m-auto">
                <p>cerohuella@gmail.com</p>
                <p>11-12345678</p>
                <p>caba-Argentina</p>
            </address>
            <div className="">
                <h5>CONTENIDO</h5>
                <Nav className="d-flex justify-content-center align-items-center ">
                    <Nav.Link className="w-auto" href="#home">Home</Nav.Link>
                    <Nav.Link className="w-auto" href="#link">Link</Nav.Link>
                    <NavDropdown className="w-auto" title="Dropdown" id="basic-nav-dropdown">
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
            </div>
            <div className=" m-auto ">
                <h5 className="m-auto pb-3">REDES SOCIALES</h5>
                <Nav className="d-flex justify-content-center align-items-center">
                    <Nav.Link className="m-1" href="#link"><i class="fa-brands fa-instagram"></i></Nav.Link>
                    <Nav.Link className="m-1" href="#link"><i class="fa-brands fa-tiktok"></i></Nav.Link>
                    <Nav.Link className="m-1" href="#home"><i class="fa-brands fa-facebook"></i></Nav.Link>
                    <Nav.Link className="m-1" href="#link"><i class="fa-brands fa-x-twitter"></i></Nav.Link>
                </Nav>
            </div>
            <p>&copy; 2025 - Mi Aplicación React</p>  
        </footer>  
    );  
}  

export default Footer;  