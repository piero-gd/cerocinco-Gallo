import React, { useEffect, useState } from "react"
import './ItemListContainer.css'
import { getItems } from '../api/products'
import ItemList from './ItemList'


function ItemListContainer({ greeting, imgSrc }) {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    //tarea pesada
    useEffect(() => {
        getItems
            .then((res) => {
                setItems(res)
            })
            .catch((error) => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, []);

    //console.log(items)

    return (
        <div className="item-list-container">
            {loading ? (
                <h1>Cargando...</h1>
            ) : (
                <>
                    <h3 id="greeting">{greeting}</h3>
                    <ItemList items={items} />
                </>
            )}
        </div>
    )
}

export default ItemListContainer;