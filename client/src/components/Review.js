

function Review({review}) {

    return(
        <div className="review">
            <li className="review-comment">
                <span >{review.comment}</span>
            </li>
        </div>
    );
}

export default Review;