import { useState } from "react";
import Main from "../components/Main";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import Nav from "../components/Nav";
import ProductosContainer from "../components/ProductosContainer";
import Carrito from "../components/Carrito";

export default function Home(){
    /*const productos = [
    {
        id: 1,
        nombre: "Essence Mascara Lash Princess",
        descripcion: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        precio: 9.99,
        imagen: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
    },
    {
        id: 2,
        nombre: "Eyeshadow Palette with Mirror",
        descripcion: "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
        precio: 19.99,
        imagen: "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png"
    },
    {
        id: 3,
        nombre: "Essence Mascara Lash Princess",
        descripcion: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        precio: 9.99,
        imagen: "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png"
    },
    {
        id: 4,
        nombre: "Eyeshadow Palette with Mirror",
        descripcion: "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
        precio: 19.99,
        imagen: "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png"
    }
    ]*/

    const productosCarrito =[""];


    return(
        <div>
            <div>
                <Header/>
                <Main/>
                <h2>CATALOGO DE PRODUCTOS</h2>
                <ProductosContainer/>
                <Footer/>
            </div>
        </div>
        
    )
}