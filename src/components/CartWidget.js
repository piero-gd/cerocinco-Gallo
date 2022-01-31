import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

export default function CartWidget() {
    return (
        <FontAwesomeIcon className="m-2" icon={faShoppingCart}/>
    )
}