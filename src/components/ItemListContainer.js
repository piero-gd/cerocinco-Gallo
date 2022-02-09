import React, { useEffect, useState } from "react"
import './ItemListContainer.css'
import { getItems } from '../api/products'
import ItemList from './ItemList'

// La función de este componente es obtener la lista de productos.
// Guardarla en un estado propio (useState)
// Y pasarsela a otro componente hijo.
function ItemListContainer({ greeting, imgSrc }) {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    //tarea pesada (cuando se monta el componente)
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