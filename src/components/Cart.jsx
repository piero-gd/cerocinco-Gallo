import React, { useContext, useState, useEffect } from "react";
import './Cart.css'
import { Link } from "react-router-dom";
import { CartContext } from '../context/CartContext'
import { db } from "../firebase";
import { collection, addDoc } from 'firebase/firestore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function Cart() {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [email2, setEmail2] = useState('')
    const [orderId, setOrderId] = useState('')
    const [loading, setLoading] = useState(false)

    const { cart, vaciarCarrito, sumarTotal, sumarCantUnidades, deleteItem, setOrderConfirmed } = useContext(CartContext)

    // Resetear el estado de confirmación cuando el componente se monta (el usuario vuelve al carrito)
    useEffect(() => {
        if (!orderId) {
            setOrderConfirmed(false);
        }
    }, [setOrderConfirmed, orderId]);

    const sendOrder = (e) => {
        e.preventDefault()
        setLoading(true)
        const order = {
            buyer: { name: name, lastName: lastName, phone: phone, email: email },
            items: cart,
            date: new Date(),
            total: sumarTotal()
        }
        const ordersCollection = collection(db, "orders")

        addDoc(ordersCollection, order)
            .then((doc) => {
                setOrderId(doc.id)
                setOrderConfirmed(true)
                console.log("Se guardó el documento correctamente", doc.id)
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false)
                vaciarCarrito()
            })
    }

    if (orderId !== '') {
        // Cuando hay una orden confirmada
        return (
            <div className="container py-5">
                <div className="card border-0 py-5 text-center">
                    <div className="card-body">
                        <h2 className="mb-4 display-6">¡Orden realizada con éxito!</h2>
                        <p className="lead mb-4">Tu número de orden es:</p>
                        <div className="alert alert-success d-inline-block px-4 py-3 mb-4">
                            <strong>{orderId}</strong>
                        </div>
                        <div>
                            <Link 
                                to="/" 
                                className="btn btn-primary mt-3"
                                onClick={() => setOrderConfirmed(false)}
                            >
                                Volver a la tienda
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container py-4">
            {cart.length === 0 ? (
                <div className="text-center py-5">
                    <h2 className="mb-4">Tu carrito está vacío</h2>
                    <p className="text-muted mb-4">Agrega algunos productos para empezar a comprar</p>
                    <Link to="/" className="btn btn-primary">Ver productos</Link>
                </div>
            ) : (
                <div className="row">
                    <div className="col-lg-8 mb-4 mb-lg-0">
                        <h3 className="mb-4">Tu carrito</h3>
                        <div className="card border-0 shadow-sm">
                            <div className="card-body p-0">
                                {cart.map((producto) => (
                                    <div className="d-flex align-items-center border-bottom p-3" key={producto.id}>
                                        <div className="flex-shrink-0" style={{ width: "80px", height: "80px" }}>
                                            <img className="img-fluid rounded" style={{ objectFit: "cover", width: "100%", height: "100%" }} src={producto.img} alt={producto.name} />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h5 className="mb-0">{producto.name}</h5>
                                            <p className="text-muted mb-0">S/ {producto.price} x {producto.cantidad}</p>
                                        </div>
                                        <div className="ms-auto">
                                            <button className="btn btn-sm btn-outline-danger" onClick={() => deleteItem(producto.id)}>
                                                <FontAwesomeIcon icon={faTrash} /> Eliminar
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="card-footer bg-white">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <p className="mb-0">Total Unidades: <strong>{sumarCantUnidades()}</strong></p>
                                    </div>
                                    <button className="btn btn-outline-danger" onClick={vaciarCarrito}>
                                        Vaciar Carrito
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card border-0 shadow-sm">
                            <div className="card-header bg-white border-0">
                                <h3 className="mb-0">Resumen</h3>
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between mb-3">
                                    <span>Subtotal:</span>
                                    <span>S/ {sumarTotal()}</span>
                                </div>
                                <div className="d-flex justify-content-between mb-3">
                                    <span>Envío:</span>
                                    <span>Gratis</span>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between mb-4">
                                    <strong>Total:</strong>
                                    <strong>S/ {sumarTotal()}</strong>
                                </div>
                                <form onSubmit={sendOrder}>
                                    <h4 className="mb-3">Información de contacto</h4>
                                    <div className="mb-3">
                                        <input
                                            className="form-control"
                                            id="inputName"
                                            onChange={(e) => setName(e.target.value)}
                                            value={name}
                                            type="text"
                                            placeholder="Nombre"
                                            pattern="^[A-Za-z0-9]{3,16}$"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            className="form-control"
                                            onChange={(e) => setLastName(e.target.value)}
                                            value={lastName}
                                            type="text"
                                            placeholder="Apellido"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            className="form-control"
                                            onChange={(e) => setPhone(e.target.value)}
                                            value={phone}
                                            type="text"
                                            placeholder="Teléfono"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            className="form-control"
                                            onChange={(e) => setEmail(e.target.value)}
                                            value={email}
                                            type="email"
                                            placeholder="Email"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <input
                                            className="form-control"
                                            onChange={(e) => setEmail2(e.target.value)}
                                            value={email2}
                                            type="email"
                                            placeholder="Confirmar Email"
                                            pattern={email}
                                            required
                                        />
                                    </div>
                                    <button className="btn btn-primary w-100" type="submit" disabled={loading}>
                                        {loading ? 'Procesando...' : 'Finalizar compra'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cart;