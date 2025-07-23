import React from "react";
import { Link } from "react-router-dom";
import '../../styles/custom.css';

const Error = () => {
    return (
        <div className="container text-center py-5">
            <div className="error-page fade-in">
                <div className="mb-4">
                    <i className="fas fa-exclamation-triangle text-warning" style={{ fontSize: "5rem" }}></i>
                </div>
                <h1 className="display-1 fw-bold mb-3">404</h1>
                <h2 className="mb-4">Página no encontrada</h2>
                <p className="lead mb-5">Lo sentimos, la página que estás buscando no existe o no está disponible.</p>
                <Link to="/" className="btn btn-primary btn-lg">
                    <i className="fas fa-home me-2"></i> Volver al Inicio
                </Link>
            </div>
        </div>
    )
}

export default Error