import React from "react";
import './Menu.css';

export default function Menu() {
    return (
        <div>
            <ul>
                <li>Mi primer item</li>
                <li>Mi segundo item</li>
                <li>Mi tercer item</li>
            </ul>
            <ul className="segundo-menu">
                <li>Mi segundo menu</li>
                <li>Mi segundo menu item 2</li>
            </ul>
        </div>
    )
}