import { useState } from "react";
import "../styles/CardCarrito.css"
import CardDeCarrito from "./CardDeCarrito";

export default function Carrito({productos}) {
    const total= productos.reduce(
        (subtotal,producto) => subtotal+ producto.price*producto.cantidad , 0
    )

    return(
        <div className=".contenedor-productos-carrito">
            {productos.length > 0 ? productos.map((producto) => (
                <CardDeCarrito 
                key={producto.id}
                producto={producto}/>
            )) 
            : <p>Carrito vacio</p>}
            { total>0 ? <small>Total a pagar: $ {total}</small>: <></>  }
        </div>
    )
}