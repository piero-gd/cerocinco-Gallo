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

    const isOnCart = (id) => {
        const respuesta = cart.some((prod) => prod.id === id)
        return respuesta
    }

    const sumarCantidad = (cantidad, item) => {
        const copia = [...cart]
        copia.forEach((producto) => {
            if (producto.id === item.id) {
                producto.cantidad += cantidad
            }
        })
        setCart(copia)
    }

    const vaciarCarrito = () => {
        setCart([])
    }

    const deleteItem = (id) => {
        setCart(cart.filter((producto) => producto.id !== id))
    }

    const sumarTotal = () => {
        var total = 0
        const copia = [...cart]
        copia.forEach((producto) => {
            total += producto.cantidad * producto.price
        })
        return total
    }
    
    const sumarCantUnidades = () => {
        var cantUnidades = 0
        const copia = [...cart]
        copia.forEach((producto) => {
            cantUnidades += producto.cantidad
        })
        return cantUnidades
    }


    return (
        <CartContext.Provider value={{cart, addToCart, vaciarCarrito, sumarTotal, sumarCantUnidades, deleteItem}}>
            {children}
        </CartContext.Provider>
    )
}