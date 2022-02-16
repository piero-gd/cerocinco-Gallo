import './ItemDetail.css'
import { useContext, useState } from "react"
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import ItemCount from './ItemCount'

export default function ItemDetail({ item }) {
    const [showButton, setShowButton] = useState(false)
    //const [itemAmount, setItemAmount] = useState(undefined)
    const { addToCart } = useContext(CartContext)

    function onAddItem(cantidad) {
        setShowButton(true)
        //setItemAmount(cantidad)
        addToCart(cantidad, item)
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
                    !showButton ?
                    <ItemCount stock={item.stock} initial={0} onAddItem={onAddItem} /> 
                    :
                    <Link to="/cart">Ir al carrito</Link>
                }
                
            </div>
        </div>
    )
}