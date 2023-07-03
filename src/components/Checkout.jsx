import React, { useContext, useState } from 'react'
import CartContext from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const Checkout = () => {

    const [pedidoId, setPedidoId]= useState ("");
  
    const {carrito, precioFinal,funcionVaciarCarrito} = useContext (CartContext);

    const {register, handleSubmit} = useForm ();
    
    const comprar = (dato) => {
        const pedido = {
            cliente : dato,
            productos: carrito,
            total: precioFinal()
        }

        console.log(pedido);

        const pedidosRef = collection(db,"pedidos");

        addDoc(pedidosRef,pedido)
        .then((doc)=> {
            setPedidoId(doc.id);
            funcionVaciarCarrito();
        })
    }

    if(pedidoId){
        return(
            <div className="container-compra">
                <h1 className="main-title">Muchas gracias por tu compra!</h1>
                <p>Tu número de pedido es {pedidoId}</p>
            </div>
        )
    }
  
  
    return (
    <div className="container">
        <h1 className="main-title-contacto">Checkout</h1>
        <form className="formulario-de-contacto" onSubmit={handleSubmit(comprar)}>
            <input type="text" placeholder="Ingrese tu nombre completo" {...register("nombre")} />
            <input type="email" placeholder="Ingrese tu e-mail" {...register("email")} />
            <input type="phone" placeholder="Ingrese tu teléfono" {...register("telefono")} />
            <button className="enviar" type="submit">Comprar</button>
        </form>
    </div>
  )
}

export default Checkout