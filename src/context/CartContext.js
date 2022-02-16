import { createContext, useState } from "react";

export const CartContext = createContext([])

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (cantidad, item) => {
        if (isOnCart(item.id)){
            sumarCantidad(cantidad, item)
        } else {
            setCart([...cart, {...item, cantidad}])
        }
    }


    //revisar si esta en el carrito
    const isOnCart = (id) => {
        //itero el carrito y devuelvo un boolean
        const respuesta = cart.some((prod) => prod.id === id)
        return respuesta
    }

    //sumar la cantidad
    const sumarCantidad = (cantidad, item) => {
        const copia = [...cart]
        copia.forEach((producto) => {
            if (producto.id === item.id) {
                producto.cantidad += cantidad
            }
        })
    }

    const vaciarCarrito = () => {
        setCart([])
    }

    //eliminar por item
    const deleteItem = (id) => {
        setCart(cart.filter((producto) => producto.id !== id))
    }

    //sumar total del carrito (precio * cantidad)

    //sumar la cantidad de unidades del carrito

    return (
        <CartContext.Provider value={{cart, addToCart, vaciarCarrito, deleteItem}}>
            {children}
        </CartContext.Provider>
    )
}