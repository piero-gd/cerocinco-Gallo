import React from "react"
import logo from '../img/logo.jpeg'

export default function NavBar() {
    return (
        <div>
            <img src={logo} />
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
        </div>
    )
}