import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Product from "../../Shared/Product/Product";
import './HomeService.css'

const HomeService = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://shielded-basin-18619.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const showProducts = products.slice(0, 6);

  return (
    <div className="products-section  py-3 px-4">
      <h1 className="text-center fw-bold my-4">Our Products</h1>
      <Row>
        {showProducts.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </Row>
    </div>
  );
};

export default HomeService;
