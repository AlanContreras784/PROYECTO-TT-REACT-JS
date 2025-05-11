import { useState } from "react";
import "../styles/Cards.css";
import Boton from "./CambiaColorBoton"

export default function Cards({producto,funcionCarrito}){
    function agregarAlCarrito() {
            funcionCarrito(producto)
    
    }

    return(
        <div className="producto-contenedor">
            <div key={producto.id} className="producto-card">
                < img className="producto-imagen" src={producto.imagen} />
                <h3>{producto.name}</h3>
                <small>{producto.description}</small>
                <p>{producto.price}</p>
                <Boton
                    texto={"Agregar al Carrito"}
                    funcionBoton={agregarAlCarrito}
                />
            </div>
        </div>
    )
}