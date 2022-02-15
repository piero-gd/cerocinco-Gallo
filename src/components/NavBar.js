import React from "react"
import './NavBar.css'
import logo from '../images/logo.jpeg'
import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"

export default function NavBar() {
    return (
        <div className="bar">
            <a href="/"><img src={logo} /></a>
            <div className="buttons">
                <ul>
                    <li>
                        <a className="btn btn-info" href="/category/Poleras">Poleras</a>
                    </li>
                    <li>
                        <a className="btn btn-info" href="/category/polos">Polos</a>
                    </li>
                    <li>
                        <a className="btn btn-info" href="/category/gorras">Gorras</a>
                    </li>
                    <li>

                    </li>
                </ul>
                <NavLink to="/cart">
                    <CartWidget />
                    <span>5</span>
                </NavLink>

            </div>
        </div>
    )
}