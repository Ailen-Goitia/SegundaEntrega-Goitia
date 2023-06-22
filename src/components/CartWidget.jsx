import { useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../context/CartContext"
const CartWidget = () => {

  const {cantidadProductosEnCarrito} = useContext(CartContext); 
  return (
    <div>
      <Link className="menu-link" to="/Carrito">
        Carrito 
        <span className="numero-carrito">{cantidadProductosEnCarrito()}</span>
      </Link>
    </div>
  )
}

export default CartWidget
