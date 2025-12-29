import { useState } from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import { Container } from "react-bootstrap";

const ReviewContainer = () => {
    const [reviews, setReviews] = useState([]);
    const [editItem, setEditItem] = useState(null);

    const addReview = (data) => {
        if (editItem) {
            setReviews((prev) =>
                prev.map((item) =>
                    item.id === editItem.id ? { ...data, id: editItem.id } : item
                )
            );
            setEditItem(null);
        } else {
            setReviews((prev) => [...prev, { ...data, id: Date.now() }]);
        }
    };

    const deleteReview = (id) => {
        setReviews((prev) => prev.filter((item) => item.id !== id));
    };

    const editReview = (item) => {
        setEditItem(item);
    };

    return (
        <Container>
            <h2 className="text-center my-4">Customer Reviews</h2>
            <ReviewForm data={addReview} editItem={editItem} />
            <ReviewList
                listData={reviews}
                onDelete={deleteReview}
                onEdit={editReview}
            />
        </Container>
    );
};

export default ReviewContainer;
