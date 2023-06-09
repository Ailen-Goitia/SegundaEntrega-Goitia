import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../firebase/config";

const ItemListContainer = () => {
    
    const [productos, setProductos] = useState ([]);
    const [titulo, setTitulo]= useState("Productos");
    const categoria = useParams().categoria; 

    useEffect(() => {

      const productosReferencia = collection (db,"productos");
      const q = categoria ? query(productosReferencia,where("categoria","==",categoria)):productosReferencia ;

      getDocs(q)
      .then((resp) => {

        setProductos(
          resp.docs.map((doc)=> {
            return {...doc.data(), id: doc.id}
          })
        )
      })

    }, [categoria])
    
    return (
        <div>
            <ItemList productos = {productos} titulo ={titulo} />
        </div>
    )
}

export default ItemListContainer