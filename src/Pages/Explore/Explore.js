import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Product from "../Shared/Product/Product";
import Appbar from "../Shared/Appbar/Appbar";
import Footer from "../Shared/Footer/Footer";

const Explore = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://shielded-basin-18619.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <Appbar></Appbar>
      <Container>
        <h1 className="text-center fw-bold my-5">Our All Products</h1>
        <Row>
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Explore;
