import './ItemDetail.css'


export default function ItemDetail({ item }) {
    return (
        <div className="item-detail">
            <img src={item.img} alt="Imagen" />
            <div className='right-col'>
                <div className='details'>
                    <h1>{item.name}</h1>
                    <p className="price">S/ {item.price}</p>
                    <p className="description">{item.description}</p>
                </div>
                <button>Comprar</button>
            </div>
        </div>
    )
}