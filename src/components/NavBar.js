import React from "react"
import './NavBar.css'
import logo from '../images/logo.jpeg'
import CartWidget from "./CartWidget"

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
                </ul>
                <CartWidget />
                <span>5</span>
            </div>
        </div>
    )
}