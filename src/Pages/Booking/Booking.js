import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import Appbar from "../Shared/Appbar/Appbar";
import Footer from "../Shared/Footer/Footer";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import "./Booking.css";
const Booking = () => {
  const { user } = useAuth();
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://shielded-basin-18619.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      });
  }, [id]);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    if (!data.name) {
      data.name = user.displayName;
    }
    if (!data.email) {
      data.email = user.email;
    }
    const productName = product.name;
    const productPrice = product.price;
    const status = "Pending";
    const submittedData = { ...data, productName, productPrice, status };

    const isOrder = window.confirm("Are you sure?");
    if (isOrder) {
      fetch("https://shielded-basin-18619.herokuapp.com/orders", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(submittedData),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.acknowledged) {
            alert("Order Added Successfully");
            reset();
          }
        });
    }
    console.log(submittedData);
  };

  const { name, img, price, description } = product;
  return (
    <div>
      <Appbar></Appbar>
      <Container className="booking-sections">
        <Row>
          <Col lg={6} sm={12}>
            <h1 className="text-center fw-bold my-5">Please Fill the form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="form-control mb-3"
                defaultValue={user.displayName}
                {...register("name")}
                disabled
              />
              <input
                className="form-control mb-3"
                defaultValue={user.email}
                {...register("email")}
                disabled
              />
              <input
                className="form-control mb-3"
                placeholder="Your Address"
                {...register("address", { required: true })}
              />
              <input
                className="form-control mb-3"
                placeholder="Your Phone"
                type="number"
                {...register("phone", { required: true })}
              />
              <input type="submit" />
            </form>
          </Col>
          <Col lg={6} sm={12}>
            <img className="product-details-image" src={img} alt="" />
            <h3 className="product-name">Product Name: {name}</h3>
            <h4 className="price">Price: ${price}</h4>
            <p>{description}</p>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Booking;
