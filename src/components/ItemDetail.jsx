import './ItemDetail.css'
import '../styles/custom.css'
import { useContext, useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import ItemCount from './ItemCount'

export default function ItemDetail({ item }) {
    const [showButton, setShowButton] = useState(false)
    const { addToCart } = useContext(CartContext)
    const navigate = useNavigate();
    
    // Determine if product is low on stock or new
    const isLowStock = item.stock && item.stock < 5;
    const isNewProduct = item.isNew || Math.random() > 0.7; // Simulación para demo

    function onAddItem(cantidad) {
        setShowButton(true)
        addToCart(cantidad, item)
    }
    
    function goBack() {
        navigate(-1);
    }

    return (
        <div className="container py-4 fade-in">
            
            <div className="card border-0 shadow-sm">
                <div className="row g-0">
                    <div className="col-md-6 p-4 d-flex align-items-center justify-content-center">
                        <div className="position-relative product-img-container">
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
                                className="img-fluid transition-transform product-detail-img" 
                                style={{ maxHeight: '400px', objectFit: 'contain' }}
                            />
                        </div>
                    </div>
                    <div className="col-md-6 p-4 p-md-5">
                        <div className="d-flex flex-column h-100">
                            <h2 className="product-detail-title mb-2 text-uppercase">{item.name}</h2>
                            <div className="mb-3">
                                <span className="product-detail-price fs-3 fw-bold">S/ {item.price}</span>
                                {item.originalPrice && (
                                    <span className="text-decoration-line-through text-muted ms-2">
                                        S/ {item.originalPrice}
                                    </span>
                                )}
                            </div>
                            
                            <div className="mb-4">
                                <h5 className="mb-3 border-bottom pb-2">Descripción</h5>
                                <p className="product-detail-description">{item.description}</p>
                            </div>
                            
                            <div className="mt-auto pt-3">
                                <div className="d-flex flex-column flex-sm-row gap-2">
                                    {!showButton ? (
                                        <ItemCount 
                                            stock={item.stock} 
                                            initial={1} 
                                            onAddItem={onAddItem} 
                                        />
                                    ) : (
                                        <div className="d-grid gap-2 w-100 text-center">
                                            <Link to="/cart" className="btn btn-primary btn-lg mx-auto" style={{maxWidth: "300px"}}>
                                                <i className="fas fa-shopping-cart me-2"></i> Ver carrito
                                            </Link>
                                            <button onClick={goBack} className="btn btn-outline-secondary mx-auto" style={{maxWidth: "300px"}}>
                                                Seguir comprando
                                            </button>
                                        </div>
                                    )}
                                </div>
                                
                                {item.stock && (
                                    <div className="mt-3">
                                        <small className="text-muted">
                                            <i className="fas fa-box me-1"></i> 
                                            {item.stock} unidades disponibles
                                        </small>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}