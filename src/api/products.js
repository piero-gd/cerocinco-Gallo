export const items = [
    {
        id: 1,
        name: 'Polo Blanco Básico',
        stock: 10,
        price: 50,
        description: 'Polo estilo básico de color blanco',
        img: './images/polo-blanco-basico.jpg',
        category: 'polos'
    },
    {
        id: 2,
        name: 'Polo Gris Básico',
        stock: 4,
        price: 50,
        description: 'Polo estilo básico de color gris',
        img: './images/polo-gris-basico.jpg',
        category: 'polos'
    },{
        id: 3,
        name: 'Gorra Blanca',
        stock: 9,
        price: 30,
        description: 'Gorra estilo básico de color blanco',
        img: './images/gorra-blanca.jpg',
        category: 'gorras'
    },{
        id: 4,
        name: 'Gorra Gris',
        stock: 14,
        price: 30,
        description: 'Gorra estilo básico de color gris',
        img: './images/gorra-gris.jpg',
        category: 'gorras'
    },
]

export const getItems = new Promise ((resolve, reject) => {
    setTimeout(()=>{
        resolve(items)
    }, 500)
})