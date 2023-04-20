import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Review from "./Review";

function ItemDetail({onAddToCart}) {
    const [{data: item, error, status}, setItem] = useState({
        data: null,
        error: null,
        status: "pending",
    });
    const {id} = useParams();

    useEffect(() => {
        fetch(`/items/${id}`).then((r) => {
            if (r.ok) {
                r.json().then((item) =>
                setItem({data: item, error: null, status: "resolved"})
                );
            } else {
                r.json().then((err) => 
                setItem({data: null, error: err.error, status: "rejected"})
                );
            }
        });
    }, [id]);

    if (status === "pending") return <h1>Loading...</h1>
    if (status === "rejected") return <h1>Error: {error.error}</h1>

    return (
        <div>
            <div className="item-detail">
                <div className="item-detail-img-box">
                    <img className="item-detail-img" src={item.image} alt={item.name}></img>
                </div>
                <div className="item-detail-text-box">
                    <h1 className="item-detail-name">{item.name}</h1>
                    <br></br>
                    <h2 className="item-detail-price">${item.price}</h2>
                    <br></br>
                    <p className="item-detail-description">{item.description}</p>
                    <p className="blank-amt">{item.amount}</p>
                    <br></br>
                    <button 
                        className="item-detail-button"
                        onClick={() => onAddToCart(item)}
                    >   
                        Add to Cart
                    </button>
                </div>
            </div>
            <div className="item-detail-review-box">
                <h4 className="item-detail-review">Reviews:</h4>
                <ul className="review-list">
                    {item.reviews.map((review) => (
                        <Review
                            key={review.id}
                            review={review}
                        />
                    ))}
                </ul>
            </div>
        </div>   
    );
}

export default ItemDetail;