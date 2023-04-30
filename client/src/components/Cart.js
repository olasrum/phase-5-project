import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

const Cart = ({cart, setCart, onUpdateCartItem}) => {
    const [price, setPrice] = useState(0);

    useEffect(() => {
        let total = 0;
        cart.forEach(cartItem => {
            total += cartItem.item.price * cartItem.quantity;
        });
        setPrice(total)
    }, [cart]);

    const removeFromCart = (cartItem) => {
        fetch(`/cart_items/${cartItem.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(r => {
            let updatedCart = cart.filter(product => product.id !== cartItem.id);
            setCart(updatedCart)
        })
    }

    return (
        <article>
            {
                cart?.map((cartItem) => (
                    <div className="cart-box" key={cartItem.item.id}>
                        <div className="cart-image">
                            <img src={cartItem.item.image} alt={cartItem.item.name}/>
                            <p>{cartItem.item.name}</p>
                        </div>
                        <div>
                            <button onClick={() => onUpdateCartItem(cartItem, +1)}> + </button>
                            <button>{cartItem.quantity}</button>
                            <button onClick={() => onUpdateCartItem(cartItem, -1)}> - </button>
                        </div>
                        <div>
                            <span>${cartItem.quantity*cartItem.item.price}</span>
                            <button onClick={() => removeFromCart(cartItem)}>Remove</button>
                        </div>
                    </div>
                ))
            }
            <div className="total">
                <span>Total price of your cart</span>
                <span>$ {price}</span>
            </div>
            <div className="checkout-button">
                <Link to="/checkout">
                    <button>Checkout</button>
                </Link> 
            </div>
            <div className="or">or</div>
            <div className="continue-shopping-button">
                <Link to="/">
                    <button>Continue shopping</button>
                </Link> 
            </div>
        </article>
    )
}

export default Cart;