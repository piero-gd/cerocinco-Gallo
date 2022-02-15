import './ItemDetail.css'
import ItemCount from './ItemCount'
import { useContext, useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

export default function ItemDetail({ item }) {
    const [itemAmount, setItemAmount] = useState(undefined)
    //const {addToCart} = useContext(CartContext)

    function onAddItem(newItemCount) {
        setItemAmount(newItemCount)
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
                    !itemAmount ?
                    <ItemCount stock={5} initial={1} onAddItem={onAddItem} /> 
                    :
                    <Link to="/cart">Ir al carrito</Link>
                }
                
            </div>
        </div>
    )
}