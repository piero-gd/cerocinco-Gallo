import React, { useEffect, useState } from "react"
import './ItemListContainer.css'
import { getItems } from '../api/products'
import ItemList from './ItemList'
import { useParams } from "react-router-dom"

// La función de este componente es obtener la lista de productos.
// Guardarla en un estado propio (useState)
// Y pasarsela a otro componente hijo.
function ItemListContainer({ greeting, imgSrc }) {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { catId } = useParams()

    //tarea pesada (cuando se monta el componente)
    useEffect(() => {
        getItems
            .then((res) => {
                catId ? setItems(res.filter(product => {
                    return product.category === catId
                }))
                    : setItems(res)
            })
            .catch((error) => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [catId]);

    return (
        <div>
            {loading ? (
                <h1>Cargando...</h1>
            ) : (
                <>
                    <h3 id="greeting">{greeting}</h3>
                    <div className="item-list-container">
                        <ItemList items={items} />
                    </div>
                </>
            )}
        </div>
    )
}

export default ItemListContainer;