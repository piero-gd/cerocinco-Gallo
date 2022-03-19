import React, { useContext, useState } from "react";
import './Cart.css'
import { Link } from "react-router-dom";
import { CartContext } from '../context/CartContext'
import { db } from "../firebase";
import { collection, addDoc } from 'firebase/firestore'

function Cart() {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [email2, setEmail2] = useState('')
    const [orderId, setOrderId] = useState('')
    const [loading, setLoading] = useState(false)

    const { cart, vaciarCarrito, sumarTotal, sumarCantUnidades, deleteItem } = useContext(CartContext)


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
        console.log("Orden generada: " + orderId)
        return <h2>Orden realizada con éxito! ID de tu compra: {orderId}</h2>
    }


    return (
        //react.fragment 
        <div>
            {cart.length === 0 ? (
                <>
                    <h2>Aún no hay productos, vuelve al home</h2>
                    <Link to="/">Home</Link>
                </>
            ) : (
                <>
                    <div className="cart-container">
                        {console.log(cart)}
                        {cart.map((producto) => (
                            <div className="item-container" key={producto.id}>
                                <img id="item-img" alt="" src={producto.img}></img>
                                <h3 className="item-element">{producto.name}</h3>
                                <h5 className="item-element">Precio unit: S/{producto.price}</h5>
                                <h5 className="item-element">Cantidad: {producto.cantidad}</h5>
                                <button className="item-element btn btn-danger" onClick={() => deleteItem(producto.id)}>
                                    X
                                </button>
                            </div>
                        ))}
                        <h3>Monto Total: S/{sumarTotal()}</h3>
                        <h5>Total Unidades: {sumarCantUnidades()}</h5>
                        <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar Carrito</button>
                    </div>
                    <div className="form-container">
                        <h2 style={{ textAlign: 'center' }}>
                            Termina tu compra rellenando tus datos
                        </h2>
                        <form
                            onSubmit={sendOrder}
                            action=""
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <input id="inputName"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                style={{ margin: '10px' }}
                                type="text"
                                placeholder="Nombre"
                                pattern="^[A-Za-z0-9]{3,16}$"
                                required
                            />
                            <input
                                onChange={(e) => setLastName(e.target.value)}
                                value={lastName}
                                style={{ margin: '10px' }}
                                type="text"
                                placeholder="Apellido"
                                required
                            />
                            <input
                                onChange={(e) => setPhone(e.target.value)}
                                value={phone}
                                style={{ margin: '10px' }}
                                type="text"
                                placeholder="Teléfono"
                                required
                            />
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                style={{ margin: '10px' }}
                                type="email"
                                placeholder="Email"
                                required
                            />
                            <input
                                onChange={(e) => setEmail2(e.target.value)}
                                value={email2}
                                style={{ margin: '10px' }}
                                type="email"
                                placeholder="Confirmar Email"

                                pattern={email}
                                required
                            />
                            <button className="btn btn-info">
                                {loading
                                    ? 'Generando orden de compra...'
                                    : 'Finalizar compra'}
                            </button>
                        </form>
                    </div>
                </>
            )}
        </div>
    )
}

export default Cart;