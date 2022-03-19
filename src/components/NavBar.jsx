import React, {useContext} from "react"
import './NavBar.css'
import logo from '../images/logo.jpeg'
import CartWidget from "./CartWidget"
import { NavLink, Link } from "react-router-dom"
import { CartContext } from '../context/CartContext'



export default function NavBar() {

    const { sumarCantUnidades } = useContext(CartContext)

    return (
        <div className="bar">
            <Link to={`/`}>
                <img className="logo" src={logo} alt={"Logo"} />
            </Link>
            <div className="buttons">
                <ul>
                    <li>
                        <Link className='text-link' to={`category/poleras`}>Poleras</Link>
                    </li>
                    <li>
                        <Link className='text-link' to={`category/polos`}>Polos</Link>
                    </li>
                    <li>
                        <Link className='text-link' to={`category/gorras`}>Gorras</Link>
                    </li>
                    <li>

                    </li>
                </ul>
                <NavLink className="cartButton" to="/cart">
                    <CartWidget/>
                    <span className="cart-cant">{sumarCantUnidades() === 0 ? null: sumarCantUnidades()}</span>
                </NavLink>

            </div>
        </div>
    )
}