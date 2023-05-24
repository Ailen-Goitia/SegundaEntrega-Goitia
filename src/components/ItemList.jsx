import Item from "./Item"

export const ItemList = ({productos}) => {
  return (
    <div className="contenedor">
        <h2 className="titulo-principal">Productos</h2>
        <div className="productos">
            {productos.map((prod) => < Item producto = {prod} key={prod.id}/>)}
        </div>
    </div>
  )
}

export default ItemList