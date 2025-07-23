import React from 'react'
import Item from './Item'
import './ItemList.css'
import '../styles/custom.css'

const ItemList = ({items}) => {
    return(
        <div className="container">
            <div className="products-header">
                <div className="product-count">
                    <i className="fas fa-tags me-2"></i>
                    Mostrando <span className="fw-bold">{items.length}</span> productos
                </div>
            </div>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 fade-in">
                {items.map((item, index) => {
                    return(
                        <div className={`col fade-in delay-${index % 3}00`} key={item.id}>
                            <Item item={item}/>
                        </div>
                    )
                })}
            </div>
            
            {items.length === 0 && (
                <div className="empty-state fade-in">
                    <i className="fas fa-box-open mb-3"></i>
                    <h4>No se encontraron productos</h4>
                    <p>Lo sentimos, no hay productos disponibles en esta categoría en este momento. Intenta con otra categoría o revisa más tarde.</p>
                </div>
            )}
        </div>
    )
}

export default ItemList