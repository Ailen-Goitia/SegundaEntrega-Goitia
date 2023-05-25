import Item from "./Item"

export const ItemList = ({productos, titulo}) => {
  return (
    <div className="contenedor">
        <h2 className="titulo-principal">{titulo}</h2>
        <div className="productos">
            {productos.map((prod) => < Item producto = {prod} key={prod.id}/>)}
        </div>
    </div>
  )
}

export default ItemList