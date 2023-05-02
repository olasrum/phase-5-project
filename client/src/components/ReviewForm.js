import {useState} from "react";

function ReviewForm({itemId, userId, handleAddReview}) {
    const [newReviewComment, setNewReviewComment] = useState("");

    function handleReviewChange(e) {
        setNewReviewComment(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()

        fetch("/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                comment: newReviewComment,
                item_id: itemId,
                user_id: userId,
            }),
        })
        .then((r) => r.json())
        .then((newReview) => {
            handleAddReview(newReview);
            setNewReviewComment("");
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="review-form">
                <label for="form-comment">
                Add Review: 
                    <input
                    className="form-comment"
                    type="text"
                    onChange={handleReviewChange}
                    value={newReviewComment}>     
                    </input>
                </label>
                <input 
                className="form-submit"
                type="submit"
                value="Submit">
                </input>
            </form>
        </div>
    )
}

export default ReviewForm;