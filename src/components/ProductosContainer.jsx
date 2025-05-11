import Cards from "./Cards";
import "../styles/Cards.css"
import { useState } from "react";
import Carrito from "./Carrito";
import { useEffect } from "react";
import "../styles/CardCarrito.css"

export default function ProductosContainer({functionCarrito}){

    //Array Vacio para guardar la lista  de Productos recibidos por UseEffect
    const [productos, setProductos]= useState([]);
    //Estado para informar la carga de datos del array del servidor
    const [cargando,setCargando] = useState(true);
    //Estado para informar los errores al carga los datos del servidor
    const [error, setError] = useState(null);


    {useEffect(() => {
        //Hacer pedido a la Api
        fetch('https://68100ddf27f2fdac24102328.mockapi.io/productos')
            .then((respuesta) =>
                respuesta.json()
            )
            .then((datos) => {
                console.log(datos)
                setProductos(datos)
                setCargando(false);
            })
            .catch((error) => {
                console.log("Error", error)
                setError('Hubo un problema al cargar los productos.');
                setCargando(false);
            });
    }, []);}

    function Disparadora(producto){
        functionCarrito(producto)
    }



    if (cargando){
        return <p>Cargando productos......</p>
    }else if(error){
        return <p>{error}</p>
    }else{
        return(
            <div>
                <div className="producto-contenedor">
                    {productos.map((producto) => (
                        <Cards
                            key={producto.id}
                            producto={producto}
                            funcionCarrito={Disparadora}
                            />
                    ))}
                </div>
            </div>
        )
    }
}

