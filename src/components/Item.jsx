import React from 'react';
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ item }) => {
    // Determinar si el producto está en stock o si es nuevo
    const isLowStock = item.stock && item.stock < 5;
    const isNewProduct = item.isNew || Math.random() > 0.7; // Simulación para demo
    
    return (
        <div className="product-card card hover-shadow transition-all mb-4 h-100">
            <Link to={`/item/${item.id}`} className="text-decoration-none d-flex flex-column h-100">
                <div className="product-img-container position-relative">
                    {isNewProduct && (
                        <span className="badge bg-success position-absolute top-0 start-0 m-2 z-index-1">
                            NUEVO
                        </span>
                    )}
                    {isLowStock && (
                        <span className="badge bg-warning text-dark position-absolute top-0 end-0 m-2 z-index-1">
                            ¡ÚLTIMAS UNIDADES!
                        </span>
                    )}
                    <img 
                        src={item.img} 
                        alt={item.name} 
                        className="card-img-top transition-transform"
                    />
                    <div className="product-actions">
                        <button className="btn btn-sm btn-light rounded-circle quick-view-btn" title="Vista rápida">
                            <i className="fas fa-eye"></i>
                        </button>
                    </div>
                </div>
                <div className="card-body text-center d-flex flex-column">
                    <h6 className="product-title text-uppercase">{item.name}</h6>
                    <p className="product-description mb-2 flex-grow-1">{item.description}</p>
                    <p className="product-price">S/ {item.price}</p>
                    <button className="btn btn-primary btn-product mt-auto">
                        <i className="fas fa-shopping-bag me-2"></i> Ver detalle
                    </button>
                </div>
            </Link>
        </div>
    )
}

export default Item