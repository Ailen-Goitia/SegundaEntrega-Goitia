

export const ItemDetail = ({item}) => {
  return (
    <div className="contenedor">
        <div className="producto-detalles">
            <img src={item.imagen} alt={item.titulo} />
            <div>
                <h3 className="titulo-1">{item.titulo}</h3>
                <p className="descripcion">{item.descripcion}</p>
                <p className="categoria">Categoria: {item.categoria}</p>
                <p className="precio">Precio ${item.precio}</p>

            </div>
        </div>
    </div>
  )
}

export default ItemDetail