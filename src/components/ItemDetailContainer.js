import './ItemDetailContainer.css'

import { useEffect, useState } from "react"
import { getItems } from '../api/products'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import ItemCount from './ItemCount'

// Ir a buscar con el getItem la lista de productos
// Filtrar 1 producto (elegir cualquiera)
// Guardar en un estado propio ese producto
// Pasarle ese producto al componente ItemDetail.js
function ItemDetailContainer() {
    const [item, setItem] = useState()
    const { itemId } = useParams()

    useEffect(() => {
        getItems.then(function (items) {
            const it = items.find((i) => i.id === Number(itemId))
            setItem(it)
        }).catch((error) => {
            console.log(error)
        });
    }, [itemId]);
    /*
    useEffect(() => {
        (async () => {
            var items = await getItems()
            const item = items.find((i) => i.id === Number(itemId))
            setItem(item)
        })()
    }, [])
    */
    return (
        <div className='item-detail-container'>
            {!item ? (
                <p>Cargando producto...</p>
            ) : (
                <>
                    <ItemDetail item={item} />
                </>
            )}
        </div>
    )
}

export default ItemDetailContainer