import React, {useContext} from "react"
import './NavBar.css'
import logo from '../images/logo.jpeg'
import CartWidget from "./CartWidget"
import { NavLink, Link } from "react-router-dom"
import { CartContext } from '../context/CartContext'



export default function NavBar() {

    const { cart, vaciarCarrito, deleteItem } = useContext(CartContext)

    return (
        <div className="bar">
            <Link to={`/`}>
                <img src={logo} alt={"Logo"} />
            </Link>
            <div className="buttons">
                <ul>
                    <li>
                        <Link className="btn btn-info" to={`category/poleras`}>Poleras</Link>
                    </li>
                    <li>
                        <Link className="btn btn-info" to={`category/polos`}>Polos</Link>
                    </li>
                    <li>
                        <Link className="btn btn-info" to={`category/gorras`}>Gorras</Link>
                    </li>
                    <li>

                    </li>
                </ul>
                <NavLink to="/cart">
                    <CartWidget />
                    {cart.length === 0 ? null: cart.length}
                </NavLink>

            </div>
        </div>
    )
}