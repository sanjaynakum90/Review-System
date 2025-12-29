import React, { useEffect, useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

const ReviewForm = ({ onSubmit, editItem }) => {
    const [input, setInput] = useState({
        name: "",
        description: "",
        rate: "",
    });

    useEffect(() => {
        if (editItem) {
            setInput(editItem);
        }
    }, [editItem]);

    const handleChange = (field, e) => {
        setInput({ ...input, [field]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (onSubmit && typeof onSubmit === "function") {
            onSubmit(input);
            setInput({ name: "", description: "", rate: "" });
        } else {
            console.error("onSubmit prop is required and must be a function");
        }
    };

    return (
        <Container className="my-4">
            <Card className="shadow-sm">
                <Card.Body>
                    <Card.Title className="text-center mb-4">
                        {editItem ? "Edit Review ✏️" : "Leave a Review ⭐"}
                    </Card.Title>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={input.name}
                                onChange={(e) => handleChange("name", e)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={input.description}
                                onChange={(e) =>
                                    handleChange("description", e)
                                }
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label>Rating</Form.Label>
                            <Form.Select
                                value={input.rate}
                                onChange={(e) => handleChange("rate", e)}
                                required
                            >
                                <option value="">Select rating</option>
                                <option value="⭐">1 ⭐</option>
                                <option value="⭐⭐">2 ⭐⭐</option>
                                <option value="⭐⭐⭐">3 ⭐⭐⭐</option>
                                <option value="⭐⭐⭐⭐">4 ⭐⭐⭐⭐</option>
                                <option value="⭐⭐⭐⭐⭐">5 ⭐⭐⭐⭐⭐</option>
                            </Form.Select>
                        </Form.Group>

                        <Button type="submit" className="w-100">
                            {editItem ? "Update Review" : "Submit Review"}
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ReviewForm;