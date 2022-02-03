import React from "react";
import './ItemListContainer.css';


function ItemListContainer({ greeting, imgSrc }) {
    return (
        <div className="item-list-container">
            {/*<img src={imgSrc} alt="Imagen del item" />*/}
            <h3>{greeting}</h3>
        </div>
    )
}

export default ItemListContainer;