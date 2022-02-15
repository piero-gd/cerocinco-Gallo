import React, { useState } from "react";
import './ItemCount.css';

const ItemCount = ({ stock, initial, onChangeItemCount }) => {
    const [number, setNumber] = useState(0)

    const add = () => {
        number < stock && setNumber(number + 1)
    };

    const substract = () => {
        number > initial && setNumber(number -1)
    };

    const onAdd = (event) => {
        console.log(event.target.value)
        onAdd(event.target.value)
    };

    return (
        <div className="container-button">
            <div className="container-add-substract">
                <button onClick={add}>+</button>
                <p>{number}</p>
                <button onClick={substract}>-</button>
            </div>
            <div>
                <button 
                disabled={number === 0} 
                className={number === 0 ? 'disabled' : "add"}
                onClick={onAdd}>
                    Agregar al Carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount