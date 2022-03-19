import React from 'react';
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ item }) => {
    console.log(item);
    return (
        <Link className='item-link' to={`/item/${item.id}`}>
            <div className='item'>
                <img src={item.img} alt={item.name} />
                <div>
                    <h6 id='item-name' className='item-text'>{item.name.toUpperCase()}</h6>
                    <h6 id='item-description' className='item-text'>{item.description}</h6>
                    <h5 id='item-price' className='item-text'><span>S/ </span>{item.price}</h5>
                    <button className='item-btn'>{"Ver detalle >>"}</button>
                </div>
            </div>
        </Link>
    )
}

export default Item