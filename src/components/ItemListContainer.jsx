import { useEffect, useState } from "react";
import { solicitarDatos } from "../helpers/solicitarDatos";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    
    const [productos, setProductos] = useState ([]);

    useEffect(() => {
      solicitarDatos()
      .then ((res) =>{
        setProductos(res);
      })
    }, [])
    
    return (
        <div>
            <ItemList productos = {productos}/>
        </div>
    )
}

export default ItemListContainer