import { useState } from "react";
import { ItemCount } from "./ItemCount"
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


export const ItemDetail = ({item}) => {

  const {carrito, agregarCarrito}= useContext(CartContext);
  console.log(carrito);
  
  const [cantidad, setCantidad]= useState(1);

  const restar = () => {
      cantidad > 1 && setCantidad (cantidad - 1)
  }
  const sumar = () => {
     cantidad < item.stock && setCantidad (cantidad + 1)
  }
  return (
    <div className="contenedor">
        <div className="producto-detalles">
            <img src={item.imagen} alt={item.titulo} />
            <div>
                <h3 className="titulo-1">{item.titulo}</h3>
                <p className="descripcion">{item.descripcion}</p>
                <p className="categoria">Categoria: {item.categoria}</p>
                <p className="precio">Precio ${item.precio}</p>
                <ItemCount cantidad={cantidad} sumar={sumar} restar={restar} agregar={() => {agregarCarrito (item,cantidad)}}/>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail