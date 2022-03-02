import React, { useState } from "react";


const AddItemContainer = () => {

    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [stock, setStock] = useState("")
    
    const handleTitleChange = event => setTitle(event.target.value)
    const handleDescriptionChange = event => setDescription(event.target.value)
    const handleCategoryChange = event => setCategory(event.target.value)
    const handlePriceChange = event => setPrice(event.target.value)
    const handleStockChange = event => setStock(event.target.value)


    const onSubmit = (event) => {
        event.preventDefault()
        console.log(title)
    }

    const setImage = () => {
        
    }
}