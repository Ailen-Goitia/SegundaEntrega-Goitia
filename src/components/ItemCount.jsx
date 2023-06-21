
export const ItemCount = ({cantidad, restar, sumar, agregar}) => {
    
  return (
    <div>
        <div className="boton-suma-resta">
            <button onClick={restar}>-</button>
            <p>{cantidad}</p>
            <button onClick={sumar}>+</button>
        </div>
        <button className="agregar-al-carrito" onClick={agregar}>Agregar al 🛒</button>
        
    </div>
  )
}

export default ItemCount
