import React, { useContext } from 'react'
import CartContext from '../context/CartContext'

const Carrito = () => {
const {carrito, precioFinal,funcionVaciarCarrito} = useContext (CartContext);

const funcionVaciar = () => {
    funcionVaciarCarrito ();
}

  return (
    <div className='container'>
        <h1 className='main-title'>Carrito</h1>
        {carrito.map((prod)=>(
            <div key={prod.id}>
            <h3>{prod.titulo}</h3>
            <p>Precio unidad $ {prod.precio}</p>
            <p>Precio total $ {prod.precio * prod.cantidad}</p>
            <p>Cantidad: {prod.precio}</p>
            </div>
        ))
        }
        {carrito.length > 0 ?
        <div>
            <h2>Precio final:$ {precioFinal()} </h2>
            <button onClick={funcionVaciar}></button>
        </div> :
        <h2>El carrito esta vacio 😔</h2>
        }
    </div>
  )
}

export default Carrito