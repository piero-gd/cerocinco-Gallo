import './ItemDetailContainer.css'

import { useEffect, useState } from "react"
import { getItems } from '../api/products'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'


// Ir a buscar con el getItem la lista de productos
// Filtrar 1 producto (elegir cualquiera)
// Guardar en un estado propio ese producto
// Pasarle ese producto al componente ItemDetail.js
function ItemDetailContainer() {
    const [item, setItem] = useState()
    //const { itemId } = useParams()

    /*
    useEffect(() => {
        getItems().then((items) => {
            const item = items.find((i) => i.id === 2)
            setItem(item)
        }).catch((error) => {
            console.log(error)
        });
    }, []);
    */
    useEffect(() => {
        async function buscarProductos() {
            const items = await getItems()

            items.find((i) => i.id === 2)
        }
    })

    return (
        <div className='item-detail-container'>
            {!item ? (
                <p>Cargando producto...</p>
            ) : (
                <ItemDetail item={item} />
            )}
        </div>
    )
}

export default ItemDetailContainer