import {Link} from "react-router-dom";

function ItemList({item, onAddToCart}) {
    return (
        <div>
             <div className="item-list">
            <div className="image-box">
                <Link to={`/items/${item.id}`}>
                <img src={item.image} alt={item.name}></img>
                </Link>
            </div>
            <div className="item-list-details">
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p className="blank-amt">{item.amount}</p>
               
            </div>   
        </div>
            <div className="item-list-button">
                <button onClick={() => onAddToCart(item)}>Add to Cart</button>
            </div> 
        </div>
       
    )
}

export default ItemList;