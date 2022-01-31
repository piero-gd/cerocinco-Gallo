import React from "react";
import './ItemListContainer.css';


function ItemListContainer({ greeting, imgSrc }) {
    return (
        <div className="item-list-container">
            <img src={imgSrc} alt="Imagen del item" />
            <p>Artículo: {greeting}</p>
        </div>
    )
}

export default ItemListContainer;