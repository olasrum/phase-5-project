import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

function Confirmation() {
    const [{data: order, error, status}, setOrder] = useState({
        data: null,
        error: null,
        status: "pending",
    });
    const {id} = useParams();

    useEffect(() => {
        fetch(`/orders/${id}`).then((r) => {
            if (r.ok) {
                r.json().then((order) =>
                setOrder({data: order, error: null, status: "resolved"})
                );
            } else {
                r.json().then((err) =>
                setOrder({data: null, error: err.error, status: "rejected"})
                );
            }
        });
    }, [id]);

    if (status === "pending") return <h1>Loading...</h1>
    if (status === "rejected") return <h1>Error: {error.error}</h1>
   
    return (
        <div className="confirmation">
            <p>Thank you for your order</p>
            <p>Your order number is: <span style={{fontWeight: "bold"}}>{order.order_number}</span></p>
            <p>Please send payment for your order within 48hrs to the following bank account using your order number as a reference.</p>
            <p>If no payment is received within 48hrs the order will be cancelled.</p>
            <p><span style={{fontWeight: "bold"}}>BSB: 111-111</span></p>
            <p><span style={{fontWeight: "bold"}}>Account number: 111 111 111 </span></p>
            <p><span style={{fontWeight: "bold"}}>Account name: For the love of birds</span></p>
            <p>Your order will be posted within 24hrs of payment being confirmed</p>
            <p>Thank you for shopping with us and hope to see you again soon!</p>
           
        </div>

    )
    
}
export default Confirmation;