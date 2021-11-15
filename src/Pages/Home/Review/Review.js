import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://shielded-basin-18619.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Container className="py-5">
      <h1 className="text-center fw-bold my-5">Review</h1>

      <Row>
        {reviews.map((review) => (
          <Col key={review._id} lg={3} sm={12}>
            <div className="border p-3">
              <h4>{review.name}</h4>
              <p>{review.email}</p>
              <div>
                Review:{" "}
                <Rating
                  className="text-warning"
                  emptySymbol="far fa-star"
                  fullSymbol="fas fa-star"
                  initialRating={review.review}
                  readonly
                />
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Review;
