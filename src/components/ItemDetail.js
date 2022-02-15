import './ItemDetail.css'
import ItemCount from './ItemCount'
import { useContext, useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

export default function ItemDetail({ item }) {
    const [itemCount, setItemCount] = useState(1)
    //const {addToCart} = useContext(CartContext)

    function onAddItem(newItemCount) {
        setItemCount(newItemCount)
        //addToCart(cantidad, item)
    }

    return (
        <div className="item-detail">
            <img src={item.img} alt="Imagen" />
            <div className='right-col'>
                <div className='details'>
                    <h1>{item.name}</h1>
                    <p className="price">S/ {item.price}</p>
                    <p className="description">{item.description}</p>
                </div>
                {
                    !itemCount ?
                    <ItemCount stock={5} initial={1} onAdd={onAddItem} /> :
                    <Link to="/cart">Ir al carrito</Link>
                }
                
            </div>
        </div>
    )
}