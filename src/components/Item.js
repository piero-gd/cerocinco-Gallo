import './Item.css'

const Item = ({item}) => {
    console.log(item);
    return(
        <div className='item'>
            <img src={item.img} alt={item.name}/>
            <div>
                <h3>{item.name}</h3>
                <h5><span>S/</span>{item.price}</h5>
                <p>{item.description}</p>
            </div>
        </div>
    )
}

export default Item