import { useState } from "react";
import "../styles/CardCarrito.css"
import CardDeCarrito from "./CardDeCarrito";

export default function Carrito({productosCarrito, funcionBorrar}) {

    const total= productosCarrito.reduce(
        (subtotal,producto) => subtotal+ producto.price*producto.cantidad , 0
    )

    function funcionDisparadoraEliminar(id){
        funcionBorrar(id)
    }


    return(
        <div className=".contenedor-productos-carrito">
            {productosCarrito.length > 0 ? productosCarrito.map((producto) => (
                <CardDeCarrito 
                key={producto.id}
                producto={producto}
                funcionDisparadoraEliminar={funcionDisparadoraEliminar}
                />
        
            )) 
            : <p>Carrito vacio</p>}
            {total > 0 ? <span>Total a pagar: {total.toFixed(2)} $</span> : <></>}

        </div>
    )
}