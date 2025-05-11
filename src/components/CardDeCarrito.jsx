import { useState } from "react"
import "../styles/CardCarrito.css"
import Boton from "./CambiaColorBoton"

export default function CardDeCarrito({producto, funcionDisparadoraEliminar}){

    const [cantidad, setCantidad]= useState(1)
    
    function ElimnarProductoCard(){
        console.log("paso 1")
        funcionDisparadoraEliminar(producto.id)
    }

    function sumarCantidadCarrito() {
        setCantidad(cantidad+1)
    }

        

    function restarCantidadCarrito() {
        if(cantidad>1){
            setCantidad(cantidad-1)
        }  
    }



    return(
        <div>
            <div className="contenedor-productos-carrito">
            <div className="carrito-tarjeta">
                <img src={producto.imagen} className="carrito-imagen"/>
                <h3>{producto.name}</h3>
                <div>
                    <button onClick={restarCantidadCarrito}>-</button>
                    <span>{cantidad}</span>
                    <button onClick={sumarCantidadCarrito}>+</button>
                </div>

                <div style={{display: 'flex', flexDirection:"column"}}>
                    <small>P-Unitario: $ {producto.price}</small>
                    <small>Subtotal: $ {producto.price*cantidad}</small>
                </div>
                <button  onClick={ElimnarProductoCard}>Eliminar</button>
            </div>
        </div>
        </div>
        
    )
} 