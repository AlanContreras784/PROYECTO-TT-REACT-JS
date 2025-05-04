import { useState } from "react";
import "../styles/Cards.css";
import Boton from "./CambiaColorBoton"

export default function Cards({producto,funcionCarrito}){

    const [cantidad, setCantidad] = useState(1)

    function agregarAlCarrito() {
        if(cantidad<1) return
            funcionCarrito({...producto,cantidad})
        
    }
    
    function restarCarrito() {
        if(cantidad>1){
            setCantidad(cantidad-1)
        }
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
                <div>
                    <button onClick={restarCarrito}>-</button>
                    <span>{cantidad}</span>
                    <button onClick={()=> setCantidad((cantidad )=> cantidad + 1)}>+</button>
                </div>
            </div>
        </div>
    )
}