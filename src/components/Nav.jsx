import "../styles/Nav.css"
function Nav() {  
    return (  
        <nav className="nav">  
            <ul>  
                <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Inicio</a></li>  
                <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Acerca de</a></li>  
                <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Contacto</a></li>
                <li><a href="#" style={{ color: "white", textDecoration: "none" }}><i class="fa-solid fa-cart-shopping"></i></a></li>  
            </ul>  
        </nav>  
    );  
}  
export default Nav;