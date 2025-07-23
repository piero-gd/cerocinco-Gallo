import React, {useContext} from "react"
import './NavBar.css'
import logo from '../images/logo.jpeg'
import CartWidget from "./CartWidget"
import { NavLink, Link, useLocation } from "react-router-dom"
import { CartContext } from '../context/CartContext'

export default function NavBar() {
    const { sumarCantUnidades, orderConfirmed } = useContext(CartContext)
    const location = useLocation()
    
    const isActive = (path) => {
        if (path === '/') {
            return location.pathname === path
        }
        return location.pathname.startsWith(path)
    }

    // Check if we are on the homepage
    const isHomePage = location.pathname === '/';

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light sticky-top">
                <div className="container">
                    <Link className="navbar-brand me-4" to="/">
                        <img className="logo" src={logo} alt="CeroCinco Logo" />
                    </Link>

                    <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${isActive('/category/poleras') ? 'active' : ''}`} to="/category/poleras">Poleras</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${isActive('/category/polos') ? 'active' : ''}`} to="/category/polos">Polos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${isActive('/category/gorras') ? 'active' : ''}`} to="/category/gorras">Gorras</Link>
                            </li>
                        </ul>
                        
                        <NavLink className="position-relative cart-button d-flex align-items-center" to="/cart">
                            <CartWidget/>
                            {sumarCantUnidades() > 0 && (
                                <span className="cart-count">{sumarCantUnidades()}</span>
                            )}
                        </NavLink>
                    </div>
                </div>
            </nav>
            
            {/* Breadcrumbs - Hide on homepage */}
            {!isHomePage && (
                <div className="container mt-2 mb-0 pb-0">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-1">
                            <li className="breadcrumb-item">
                                <Link to="/">Inicio</Link>
                            </li>
                            {location.pathname.includes('/category/') && (
                                <li className="breadcrumb-item active">
                                    {location.pathname.split('/category/')[1].charAt(0).toUpperCase() + location.pathname.split('/category/')[1].slice(1)}
                                </li>
                            )}
                            {location.pathname.includes('/item/') && !location.pathname.includes('/item/add') && (
                                <li className="breadcrumb-item active">Producto</li>
                            )}
                            {location.pathname === '/cart' && !orderConfirmed && (
                                <li className="breadcrumb-item active">Carrito</li>
                            )}
                            {location.pathname === '/cart' && orderConfirmed && (
                                <>
                                    <li className="breadcrumb-item"><Link to="/cart" onClick={() => window.location.reload()}>Carrito</Link></li>
                                    <li className="breadcrumb-item active">Confirmación</li>
                                </>
                            )}
                        </ol>
                    </nav>
                </div>
            )}
        </>
    )
}