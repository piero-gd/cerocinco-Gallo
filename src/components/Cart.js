import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from '../context/CartContext'
import { db } from "../firebase";
import { collection, addDoc } from 'firebase/firestore'

function Cart() {
    //const [name, setName] = useState('')
    //const [email, setEmail] = useState('')
    
    const { cart, vaciarCarrito, sumarTotal, sumarCantUnidades, deleteItem } = useContext(CartContext)
    
    
    const sendOrder = () => {
        console.log("PRUEBAAAA");
        const order = {
            buyer: { name: "Alvaro", phone: "987987987", email: "alvaroguti@hotmail.com"},
            items: cart,
            date: new Date(),
            total: sumarTotal()
        }
        console.log(order.buyer);
        console.log(order.items);
        console.log(order.date);
        console.log(order.total);
        const ordersCollection = collection(db, "orders")

        addDoc(ordersCollection, order)
            .then(doc => {
                console.log("Se guardó el documento correctamente", doc.id)
            })
            .catch(error => {
                console.log(error);
            })
        
        vaciarCarrito()
    }

    return (
        //react.fragment
        <>
            {cart.length === 0 ? (
                <>
                    <h2>Aún no hay productos, vuelve al home</h2>
                    <Link to="/">Home</Link>
                </>
            ) : (
            <>
                {console.log(cart)}
                {cart.map((producto) => (
                    <div key={producto.id}>
                        <h3>{producto.name}</h3>
                        <h5>Precio unit: {producto.price}</h5>
                        <h5>Cantidad: {producto.cantidad}</h5>
                        <button onClick={() => deleteItem(producto.id)}>
                            X
                        </button>
                    </div>
                ))}
                <h3>Monto Total: {sumarTotal()}</h3>
                <h5>Total Unidades: {sumarCantUnidades()}</h5>
                <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                <Link to={`/success`}>
                    <button onClick={sendOrder}>Realizar Compra</button>
                </Link>
            </>
            )}

        </>
    )
}

export default Cart;