import React from "react"
import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
const Nabvar = () => {
    return (
        <nav className="navbar">
            <Link to="/Productos"className="logotipo">🐾 NaricesFrias</Link>
            
            <ul className="menu">
                <li><Link className="menu-link" to="/Inicio"></Link></li> 
                <li><Link className="menu-link" to="/Productos">Productos</Link></li>
                <li><Link className="menu-link" to="/Productos/Alimentos">Alimentos</Link></li>
                <li><Link className="menu-link" to="/Productos/Accesorios">Accesorios</Link></li>
                <li><Link className="menu-link" to="/Productos/Higiene">Higiene</Link></li>
                <li><CartWidget/></li>
            </ul>
        </nav>
    )
}
export default Nabvar