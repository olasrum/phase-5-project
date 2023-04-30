import {useState} from "react";
import {useHistory} from "react-router-dom";

function Checkout({cart, setCart, user, order}) {
    const history = useHistory();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        state: "",
        postCode: "",
    });

    function handleSubmit(e) {
        e.preventDefault();

        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                order: {
                    user_id: user.id,
                    cart_items_attributes: cart.map((cart_item) => ({
                        item_id: cart_item.item.id,
                        quantity: cart_item.quantity,
                    })),
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                    address: formData.address,
                    city: formData.city,
                    state: formData.state,
                    postcode: formData.postCode
                },
            }),
        };

        fetch("/orders", requestOptions)
        .then((r) => r.json())
        .then(() => {
            setFormData({
                firstName: "",
                lastName: "",
                address: "",
                city: "",
                state: "",
                postCode: "",
            });
            setCart([])
            history.push(`/orders/${order}`)
        });
    };

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

  
    return (
        <div className="checkout">
            <h1>Checkout</h1>
            <p className="checkout-blurb">Complete shipping details below, bank details of where payment needs to made will be shown once the order is submitted</p>
            <form onSubmit={handleSubmit}>
                <div className="firstname"> 
                    <label>
                    First name: &nbsp;
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                    </label>
                </div>
                <div className="lastname">   
                    <label>
                    Last name: &nbsp;
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                    </label>
                </div>
                <div className="address"> 
                    <label>
                    Address: &nbsp;
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                    </label>
                </div>
                <div className="city">   
                    <label>
                    City: &nbsp;
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />
                    </label>
                </div>
                <div className="state">
                    <label>
                    State: &nbsp;
                    <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                    />
                    </label>
                </div>
                <div className="postcode">
                    <label>
                    Post code: &nbsp;
                    <input
                        type="text"
                        name="postCode"
                        value={formData.postCode}
                        onChange={handleChange}
                        required
                    />
                    </label>
                </div>
                <div className="submit-order-button">
                <button type="submit" >Submit order</button>
                </div>
            </form>
        </div>
    )
}

export default Checkout;