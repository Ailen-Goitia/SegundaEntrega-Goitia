import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || []; 

export const CartProvider = ({children}) => {


    const [carrito, setCarrito] = useState (carritoInicial);
  
    const agregarCarrito = (item, cantidad) => {
      const productoAgregado = {...item,cantidad};
  
      const nuevoCarrito = [...carrito];
      const productosEnElCarrito = nuevoCarrito.find((producto) => producto.id === productoAgregado.id);
      
      if (productosEnElCarrito) {
        productosEnElCarrito.cantidad = productosEnElCarrito.cantidad + cantidad;
      }else {
        nuevoCarrito.push(productoAgregado);
      }
      setCarrito(nuevoCarrito);
    }
    
    const cantidadProductosEnCarrito = () => {
      let cant = 0
      carrito.forEach((e) => cant += e.cantidad)
      return cant
    };
    
  
    const precioFinal = () => {
      let total = 0
      carrito.forEach((e) => total += (e.cantidad*e.precio))
      return total 
    };
  
    const funcionVaciarCarrito = () => {
      setCarrito([]);
    }

    useEffect(() => {
      localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])
    

    return(
    <CartContext.Provider value = {{carrito, agregarCarrito, cantidadProductosEnCarrito, precioFinal, funcionVaciarCarrito}} >
        {children}
    </CartContext.Provider>
    ) 

}


export default CartContext;



