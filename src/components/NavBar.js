import React from "react"
import './NavBar.css'
import logo from '../img/logo.jpeg'
import CartWidget from "./CartWidget"

export default function NavBar() {
    return (
        <div className="bar">
            <img src={logo} />
            <div className="buttons">
                <ul>
                    <li>
                        <a className="btn btn-info" href="">Poleras</a>
                    </li>
                    <li>
                        <a className="btn btn-info" href="">Polos</a>
                    </li>
                    <li>
                        <a className="btn btn-info" href="">Gorras</a>
                    </li>
                </ul>
                <CartWidget />
                <span>5</span>
            </div>
        </div>
    )
}