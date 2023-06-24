import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { solicitarItemporId } from "../helpers/solicitarDatos";
import ItemDetail from "./ItemDetail";
import {doc, getDoc} from "firebase/firestore";

export const ItemDetailContainer = ({}) => {

    const [item, setItem] = useState (null);
    
    const id = useParams ().id;
    
    useEffect(() => {
      solicitarItemporId(Number(id))
      .then ((res) => {
        setItem(res);
      })
    }, [id])
    

  return (
    <div>
        {item && <ItemDetail item={item}/>}
    </div>
  )
}

export default ItemDetailContainer