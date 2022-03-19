import React, { useEffect, useState } from "react";
import './ItemCount.css';

const ItemCount = ({ stock, initial, onAddItem}) => {
    const [number, setNumber] = useState(0)

    useEffect(() => {
        console.log('Esto se ejecuta cada vez que cambia el itemCounter');

        return () => {
            console.log('Se ejecuta en el cleanup');
        }

    }, [number])

    const add = () => {
        number < stock && setNumber(number + 1)
    };

    const substract = (event) => {
        number > initial && setNumber(number - 1)
    };

    const onAdd = () => {
        onAddItem(number)
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