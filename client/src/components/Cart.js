import {useState, useEffect} from "react";

const Cart = ({cart, setCart, onUpdateCartItem}) => {
    const [price, setPrice] = useState(0);

    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (
            ans += item.amount * item.price
        ))
        setPrice(ans);
    }

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
    }

    useEffect(() => {
        handlePrice();
    })

    return (
        <article>
            {
                cart?.map((item) => (
                    <div className="cart-box" key={item.id}>
                        <div className="cart-image">
                            <img src={item.image} alt={item.name}/>
                            <p>{item.name}</p>
                        </div>
                        <div>
                            <button onClick={() => onUpdateCartItem(item, +1)}> + </button>
                            <button>{item.amount}</button>
                            <button onClick={() => onUpdateCartItem(item, -1)}> - </button>
                        </div>
                        <div>
                            <span>${item.amount*item.price}</span>
                            <button onClick={() => handleRemove(item.id)}>Remove</button>
                        </div>
                    </div>
                ))
            }
            <div className="total">
                <span>Total price of your cart</span>
                <span>$ {price}</span>
            </div>
        </article>
    )
}

export default Cart;