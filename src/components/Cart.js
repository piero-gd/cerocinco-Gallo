import React, { useContext } from "react";
import { CartContext } from '../context/CartContext'

function Cart() {
    const { cart, vaciarCarrito } = useContext(CartContext)

    return (
        //react.fragment
        <>
            {cart.length === 0}
                ? <h2>Aún no hay productos, vuelve al home</h2>
            : (
            <>
                {cart.map((producto) => {
                    <div key={product.id}>
                        <h3>{product.name}</h3>
                    </div>
                })}
                <button onClick={vaciarCarrito}>Vaciar Carrito</button>
            </>
            )

        </>
    )
}

export default Cart;