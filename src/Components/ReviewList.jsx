import React from "react";
import { Container, Card, Badge, Button } from "react-bootstrap";

const ReviewList = ({ listData, onDelete, onEdit }) => {
    return (
        <Container className="my-4">
            {listData.length === 0 ? (
                <p className="text-center text-muted">
                    No reviews yet
                </p>
            ) : (
                listData.map((item) => (
                    <Card className="mb-3 shadow-sm" key={item.id}>
                        <Card.Body>
                            <Card.Title className="d-flex justify-content-between">
                                {item.name}
                                <Badge bg="warning" text="dark">
                                    {item.rate}
                                </Badge>
                            </Card.Title>

                            <Card.Text className="text-muted">
                                {item.description}
                            </Card.Text>

                            <div className="d-flex gap-2">
                                <Button
                                    variant="outline-primary"
                                    size="sm"
                                    onClick={() => onEdit(item)}
                                >
                                    Edit
                                </Button>
                                <Button
                                    variant="outline-danger"
                                    size="sm"
                                    onClick={() => onDelete(item.id)}
                                >
                                    Delete
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                ))
            )}
        </Container>
    );
};

export default ReviewList;
