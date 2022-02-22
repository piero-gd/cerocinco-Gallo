import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from '../context/CartContext'

function Cart() {
    const { cart, vaciarCarrito, deleteItem } = useContext(CartContext)
    
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
                        <h3>{producto.cantidad}</h3>
                        <button onClick={() => deleteItem(producto.id)}>
                            X
                        </button>
                    </div>
                ))}
                <button onClick={vaciarCarrito}>Vaciar Carrito</button>
            </>
            )}

        </>
    )
}

export default Cart;