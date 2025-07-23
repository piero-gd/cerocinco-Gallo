import React, { useEffect, useState } from "react"
import './ItemListContainer.css'
import { getItems } from '../api/products'
import ItemList from './ItemList'
import { useParams, Link } from "react-router-dom"
import '../styles/custom.css'

function ItemListContainer({ greeting, imgSrc }) {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { catId } = useParams()

    useEffect(() => {
        setLoading(true)
        getItems
            .then((res) => {
                catId ? setItems(res.filter(product => {
                    return product.category === catId
                }))
                    : setItems(res)
            })
            .catch((error) => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [catId]);

    const categoryTitle = catId ? catId.charAt(0).toUpperCase() + catId.slice(1) : '';
    const isHomePage = !catId;

    return (
        <div className="container py-2">
            {loading ? (
                <div className="d-flex flex-column justify-content-center align-items-center" style={{minHeight: '60vh'}}>
                    <div className="spinner-border text-primary mb-3" role="status" style={{width: '3rem', height: '3rem'}}>
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                    <p className="text-muted">Cargando productos...</p>
                </div>
            ) : (
                <>
                    {isHomePage ? (
                        <div className="home-content">
                            <div className="welcome-banner mb-5 fade-in">
                                <div className="text-center bg-image rounded" 
                                     style={{
                                        backgroundImage: "url('https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center"
                                     }}>
                                    <div className="d-flex justify-content-center align-items-center banner-content">
                                        <div className="text-white position-relative">
                                            <h1 className="display-4 fw-bold mb-3">{greeting}</h1>
                                            <h4 className="mb-4">Descubre nuestra nueva colección</h4>
                                            <a className="btn btn-outline-light btn-lg" href="#productos" role="button">
                                                <span>Ver catálogo</span> <i className="fas fa-arrow-right ms-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="featured-categories mb-5">
                                <div className="row g-4">
                                    <div className="col-md-4 fade-in delay-100">
                                        <Link to="/category/polos" className="text-decoration-none">
                                            <div className="card category-card text-white">
                                                <div className="category-img-overlay" style={{
                                                    backgroundImage: "url('https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')",
                                                }}></div>
                                                <div className="card-img-overlay d-flex align-items-center justify-content-center">
                                                    <h3 className="card-title">Polos</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-md-4 fade-in delay-200">
                                        <Link to="/category/poleras" className="text-decoration-none">
                                            <div className="card category-card text-white">
                                                <div className="category-img-overlay" style={{
                                                    backgroundImage: "url('https://images.unsplash.com/photo-1578587018452-892bacefd3f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')",
                                                }}></div>
                                                <div className="card-img-overlay d-flex align-items-center justify-content-center">
                                                    <h3 className="card-title">Poleras</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-md-4 fade-in delay-300">
                                        <Link to="/category/gorras" className="text-decoration-none">
                                            <div className="card category-card text-white">
                                                <div className="category-img-overlay" style={{
                                                    backgroundImage: "url('https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')",
                                                }}></div>
                                                <div className="card-img-overlay d-flex align-items-center justify-content-center">
                                                    <h3 className="card-title">Gorras</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="products-section" id="productos">
                                <div className="section-header fade-in delay-100">
                                    <h2>Productos destacados</h2>
                                    <p>Descubre lo nuevo de nuestra colección</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <header className="mb-5">
                            <div className="section-header fade-in">
                                <h2>{categoryTitle}</h2>
                                <p>Explora nuestra colección de {categoryTitle.toLowerCase()}</p>
                            </div>
                        </header>
                    )}
                    
                    <ItemList items={items} />
                </>
            )}
        </div>
    )
}

export default ItemListContainer;