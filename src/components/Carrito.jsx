import React, { useContext } from 'react'
import CartContext from '../context/CartContext'

const Carrito = () => {
const {carrito, precioFinal,funcionVaciarCarrito} = useContext (CartContext);

const funcionVaciar = () => {
    funcionVaciarCarrito ();
}

  return (
    <div>
        <h1 className='main-title'>Carrito</h1>
      <div className='contenedor-carrito'>
        {carrito.map((prod)=>(
            <div key={prod.id}>
            <h3 className='carrito-producto-titulo'>{prod.titulo}</h3>
            <p>Precio unidad $ {prod.precio}</p>
            <img className="carrito-producto-imagen" src={prod.imagen} alt={prod.titulo}></img>
            <p>Precio total $ {prod.precio * prod.cantidad}</p>
            <p>Cantidad: {prod.cantidad}</p>
            </div>
        ))
        }
        {carrito.length > 0 ?
        <div>
            <h2>Precio final:$ {precioFinal()} </h2>
            <button className='carrito-acciones-vaciar' onClick={funcionVaciar}>Vaciar</button>
        </div> :
        <h2>El carrito esta vacio 😔</h2>
        }
      </div>
    </div>
  )
}

export default Carrito