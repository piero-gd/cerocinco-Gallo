import { createContext, useState } from "react";

export const CartContext = createContext

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (cantidad, item) => {
        if (isOnCart(item.id)){
            alert('Ya está en el carrito')
        } else {
            setCart([...cart, {...item, cantidad}])
        }
    }


    //revisar si esta en el carrito
    const isOnCart = (id) => {
        const respuesta = cart.some((prod) => prod.id === id)
        return respuesta
    }

    const vaciarCarrito = () => {
        setCart([])
    }

    //eliminar por item

    //sumar total del carrito (precio * cantidad)

    //sumar la cantidad de unidades del carrito

    return (
        <CartContextProvider value={{cart, addToCart}}>
            {children}
        </CartContextProvider>
    )
}