import { useState } from 'react'
import './App.css'
import Home from './layouts/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer';
import ProductosContainer from './components/ProductosContainer'
import Carrito from './components/Carrito';
import FormularioConSweetAlert from './components/FormularioConSweetAlert';
function App() {

const [productosCarrito, setProductosCarrito] = useState([])



function funcionCarrito(producto){
  
  const existe = productosCarrito.find(p=> p.id===producto.id)
  if (existe) {
    const carritoActualizado = productosCarrito.map((p) => {
        if (p.id === producto.id){
            const productoActualizado = {...p, cantidad: p.cantidad + producto.cantidad}
            return productoActualizado
        }else{
            return p
        }
    })
    setProductosCarrito(carritoActualizado)
}else{
    // Si no existe, lo agregamos con su cantidad
    const nuevoCarrito = [...productosCarrito, producto];
    setProductosCarrito(nuevoCarrito)
}
    console.log(productosCarrito)
}

function borrarProductoCarrito(id){
  console.log(id)
  const nuevoCarrito = productosCarrito.filter((p) => p.id !== id);
  setProductosCarrito(nuevoCarrito);
}

  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/PROYECTO-TT-REACT-JS" element={<Home />} />
          <Route path='/PROYECTO-TT-REACT-JS/PRODUCTOS' element={<ProductosContainer functionCarrito={funcionCarrito}/>} />
          <Route path='/PROYECTO-TT-REACT-JS/CARRITO' element={<Carrito productosCarrito={productosCarrito} funcionBorrar={borrarProductoCarrito}/>}/>
          <Route path='/PROYECTO-TT-REACT-JS/CONTACTO' element={<FormularioConSweetAlert/>}/>       
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
