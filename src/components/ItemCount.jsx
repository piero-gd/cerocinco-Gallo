import React, { useState, useEffect } from "react";
import './ItemCount.css';
import '../styles/custom.css';

const ItemCount = ({ stock, initial, onAddItem }) => {
    const [number, setNumber] = useState(initial || 1);

    useEffect(() => {
        // Ensure number is set to initial value when component mounts
        setNumber(initial || 1);
    }, [initial]);

    const add = () => {
        number < stock && setNumber(number + 1);
    };

    const substract = () => {
        number > (initial || 1) && setNumber(number - 1);
    };

    const onAdd = () => {
        onAddItem(number);
    };

    return (
        <div className="w-100">
            <div className="input-group mb-3">
                <button 
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={substract}
                    disabled={number <= (initial || 1)}
                >
                    <i className="fas fa-minus"></i>
                </button>
                <input 
                    type="text" 
                    className="form-control text-center"
                    value={number}
                    readOnly
                    aria-label="Cantidad"
                />
                <button 
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={add}
                    disabled={number >= stock}
                >
                    <i className="fas fa-plus"></i>
                </button>
            </div>
            <button
                className="btn btn-primary btn-lg w-100 position-relative overflow-hidden"
                disabled={stock === 0}
                onClick={onAdd}
            >
                <i className="fas fa-shopping-cart me-2"></i> Agregar al Carrito
            </button>
        </div>
    )
}

export default ItemCount