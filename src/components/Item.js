import React from 'react';
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ item }) => {
    console.log(item);
    return (
        <Link to={`/item/${item.id}`}>
            <div className='item'>
                <img src={item.img} alt={item.name} />
                <div>
                    <h3>{item.name}</h3>
                    <h5><span>S/</span>{item.price}</h5>
                    <p>{item.description}</p>
                </div>
            </div>
        </Link>
    )
}

export default Item