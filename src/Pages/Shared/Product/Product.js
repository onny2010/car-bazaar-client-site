import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  const { _id, name, img, price, description } = product;
  return (
    <Col sm={12} lg={4} className="my-2 mt-3">
      <Card>
        <Card.Img variant="top" src={img} className="product-image" />
        <Card.Body className="body">
          <Card.Title>{name}</Card.Title>
          <Card.Text className="overFlow">{description.slice(0, 100)}</Card.Text>
        </Card.Body>
        <div className="purchase d-flex justify-content-between p-3">
          <h5>
            Price: <span className="text-warning fw-bold">${price}</span>
          </h5>
          <Link to={`/booking/${_id}`}>
            <Button variant="primary">Buy Now</Button>
          </Link>
        </div>
      </Card>
    </Col>
  );
};

export default Product;
