import { useState } from "react";
import { ItemCount } from "./ItemCount"


export const ItemDetail = ({item}) => {
  
  const [cantidad, setCantidad]= useState(1);

  const restar = () => {
      cantidad > 1 && setCantidad (cantidad - 1)
  }
  const sumar = () => {
     cantidad < item.stock && setCantidad (cantidad + 1)
  }

  const agregar = () => {
    console.log ({...item, cantidad});
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
                <ItemCount cantidad={cantidad} sumar={sumar} restar={restar} agregar={agregar}/>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail