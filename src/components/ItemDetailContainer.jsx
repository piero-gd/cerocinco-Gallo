import './ItemDetailContainer.css'
import '../styles/custom.css'
import { useEffect, useState } from "react"
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'

export default function ItemDetailContainer() {
    const [item, setItem] = useState()
    const { productId } = useParams()

    useEffect(() => {
        console.log(productId);
        // necesita conocer la base de datos, el nombre de la colleccion y el id de item
        const itemRef = doc(db, "items", productId)

        getDoc(itemRef)
            .then((snapshot) => {

                if (snapshot.exists()) {
                    setItem({ id: snapshot.id, ...snapshot.data() })
                }
            })
            .catch(error => {
                console.log(error)
            })
    }, [productId]);


    return (
        <div className='container py-4'>
            {!item ? (
                <div className="d-flex flex-column justify-content-center align-items-center" style={{minHeight: '60vh'}}>
                    <div className="spinner-border text-primary mb-3" role="status" style={{width: '3rem', height: '3rem'}}>
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                    <p className="text-muted spinner-text">Cargando detalle del producto...</p>
                </div>
            ) : (
                <>
                    <ItemDetail item={item} />
                </>
            )}
        </div>
    )
}