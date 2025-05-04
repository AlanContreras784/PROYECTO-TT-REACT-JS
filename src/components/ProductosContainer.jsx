import Cards from "./Cards";
import "../styles/Cards.css"
import { useState } from "react";
import Carrito from "./Carrito";
import { useEffect } from "react";
import "../styles/CardCarrito.css"

export default function ProductosContainer(){

    //Array de Productos recibidos por UseEffect
    const [productos, setProductos]= useState([]);
    //Array de productos creados por funcionCarrito al AgregarProductos
    const [productosCarrito, setProductosCarrito] = useState([]);
    //Estado para informar la carga de datos del array del servidor
    const [cargando,setCargando] = useState(true);
    //Estado para informar los errores al carga los datos del array del servidor
    const [error, setError] = useState(null);
    //Variable del total del Carrito    
    const  [total , setTotal] = useState(0);


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

        
    function funcionCarrito(producto){
        const existe = productosCarrito.find(p=> p.id===producto.id)
        console.log(existe)

        if(existe){
            const carritoActualizado= productosCarrito.map((p)=>{
                if(producto.id==p.id){
                    const productoActualizado= {...p, cantidad: producto.cantidad + p.cantidad}
                    return productoActualizado;
                }else{ return p }
            })
            setProductosCarrito(carritoActualizado)
        }else{
            console.log(productosCarrito)
            setProductosCarrito([...productosCarrito, producto])
        }
        
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
                            funcionCarrito={funcionCarrito}
                            />
                    ))}
                </div>
                <div >
                    <Carrito
                    key={productosCarrito.id}
                    productos={productosCarrito}
                    />
                </div>
            </div>
        )
    }
}

