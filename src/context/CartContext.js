import { createContext, useState } from "react";

export const CartContext = createContext([])

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [sumaTotal, setSumaTotal] = useState(0)
    const [cantUnidades, setCantUnidades] = useState(0)
    

    const addToCart = (cantidad, item) => {
        if (isOnCart(item.id)){
            sumarCantidad(cantidad, item)
        } else {
            setCart([...cart, {...item, cantidad}])
        }
        sumarTotal()
        sumarCantUnidades()
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
        setCart(copia)
    }

    const vaciarCarrito = () => {
        setCart([])
    }

    //eliminar por item
    const deleteItem = (id) => {
        setCart(cart.filter((producto) => producto.id !== id))
    }

    //sumar total del carrito (precio * cantidad)
    const sumarTotal = () => {
        var total = 0
        const copia = [...cart]
        console.log("PRUEBA1")
        copia.forEach((producto) => {
            total += producto.cantidad * producto.price
            console.log("PRUEBA2")
        })
        setSumaTotal(total)
    }
    //sumar la cantidad de unidades del carrito
    const sumarCantUnidades = () => {
        var cantUnidades = 0
        const copia = [...cart]
        copia.forEach((producto) => {
            cantUnidades += producto.cantidad
        })
        setCantUnidades(cantUnidades)
    }


    return (
        <CartContext.Provider value={{cart, addToCart, vaciarCarrito, sumaTotal, cantUnidades, deleteItem}}>
            {children}
        </CartContext.Provider>
    )
}