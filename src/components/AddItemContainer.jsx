import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'


const AddItemContainer = () => {

    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const [image, setImage] = useState()
    
    const handleTitleChange = event => setTitle(event.target.value)
    const handleDescriptionChange = event => setDescription(event.target.value)
    const handleCategoryChange = event => setCategory(event.target.value)
    const handlePriceChange = event => setPrice(event.target.value)
    const handleStockChange = event => setStock(event.target.value)
    const handleImageChange = event => setImage(event.target.files[0])


    const onSubmit = async (event) => {
        event.preventDefault()
        console.log(title)
        console.log(category)
        console.log(description)
        //validacion campos vacios
        if([title, category, description].some(field => field === "")){
            //todo bien

            //inicialmente placeholder sin imagen
            let pictureUrl = "https://via.placeholder.com/600?text=Sin+imagen"

            //referencia a mi coleccion
            const itemCollection = collection(db, "items")

            //codigo magico para subir imagenes
            if (typeof image !== "undefined") {
                // Referencia al storage
                const storage = getStorage()
                const imageName = (+ new Date()).toString(36)
                const storageRef = ref(storage, `items/${imageName}`)

                const uploadTask = await uploadBytes(storageRef, image)
                pictureUrl = await getDownloadURL(uploadTask.ref)
            }
        
            const newItem = {
                title: title,
                category: category,
                description: description,
                price: price,
                stock: stock,
                pictureUrl: pictureUrl
            }

            addDoc(itemCollection, newItem)
            .then(doc => {
                console.log("Se guardó el documento correctamente", doc.id)
            })
            .catch(error => {
                console.log(error);
            })
        }else {
            //hay valores vacios
            console.log("Hay valores vacios");
        }
    }



    return (
        <div className="form-product">
            <form onSubmit={onSubmit}>
                <div className="input-item">
                    <label>Nombre del producto</label>
                    <input value={title} onChange={handleTitleChange} type="text" />
                </div>
                <div className="input-item">
                    <label>Description del producto</label>
                    <input value={description} onChange={handleDescriptionChange} type="text" />
                </div>
                <div className="input-item">
                    <label>Categoría</label>
                    <input value={category} onChange={handleCategoryChange} type="text" />
                </div>
                <div className="input-item">
                    <label>Precio</label>
                    <input value={price} onChange={handlePriceChange} type="text" />
                </div>
                <div className="input-item">
                    <label>Stock</label>
                    <input value={stock} onChange={handleStockChange} type="text" />
                </div>
                <div className="input-item">
                    <label>Imagen</label>
                    <input name="file" onChange={handleImageChange} type="file" />
                </div>
                <button className="btn btn-info">
                    Subir Producto
                </button>
            </form>
        </div>
    )

}

export default AddItemContainer