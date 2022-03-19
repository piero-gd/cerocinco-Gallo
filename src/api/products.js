import { getDocs, collection } from "firebase/firestore"
import { db } from '../firebase'

export const getItems = new Promise((resolve, reject) => {
    const itemsCollection = collection(db, "items")

    // Obtengo mis documentos
    getDocs(itemsCollection)
        .then(snapshot => {

            // doc.data() archivo de Firestore, dame todos tus datos dentro del item
            // Mapeo mis productos
            const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            resolve(products)
            console.log(products)
        })
        .catch(error => {
            console.log(error)
            reject(error)
        })
})