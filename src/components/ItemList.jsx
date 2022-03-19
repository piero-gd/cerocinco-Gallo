import Item from './Item'
import './ItemList.css'

const ItemList = ({items}) =>{
    return(
        <div className='item-list'>
            {items.map((item)=>{
                return(
                    <Item key={item.id} item={item}/>
                )
            })}
        </div>
    )
}

export default ItemList