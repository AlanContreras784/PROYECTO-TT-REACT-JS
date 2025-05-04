import "../styles/CardCarrito.css"
import Boton from "./CambiaColorBoton"

export default function CardDeCarrito({producto}){
    return(
        <div>
            <div className="contenedor-productos-carrito">
            <div className="carrito-tarjeta">
                <img src={producto.imagen} className="carrito-imagen"/>
                <h3>{producto.name}</h3>
                <small>Cantidad: {producto.cantidad}</small>
                <div style={{display: 'flex', flexDirection:"column"}}>
                    <small>P-Unitario: $ {producto.price}</small>
                    <small>Subtotal: $ {producto.cantidad * producto.price}</small>
                </div>
                
                <Boton
                texto={"Eliminar"}
                />
            </div>
        </div>
        </div>
        
    )
} 