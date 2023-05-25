import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { solicitarDatos } from "../helpers/solicitarDatos";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    
    const [productos, setProductos] = useState ([]);
    const [titulo, setTitulo]= useState("Productos");
    const categoria = useParams().categoria; 

    useEffect(() => {
      solicitarDatos()
      .then ((res) =>{
        if (categoria){
          setProductos(res.filter((prod)=> prod.categoria === categoria));
          setTitulo(categoria);
        }else{
          setProductos(res);
          setTitulo ("Productos");
        }
      })
    }, [categoria])
    
    return (
        <div>
            <ItemList productos = {productos} titulo ={titulo} />
        </div>
    )
}

export default ItemListContainer