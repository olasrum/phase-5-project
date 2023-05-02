function Review({review}) {

    return(
        <div className="review">
            <li 
                className="review-comment"
                style={{paddingLeft: "15px"}}>
                <span >{review.comment}</span>
            </li>
        </div>
    );
}

export default Review;