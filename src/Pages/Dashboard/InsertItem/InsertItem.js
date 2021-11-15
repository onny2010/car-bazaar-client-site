import React from "react";
import { Container, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const InsertItem = () => {
  const { register, handleSubmit, watch, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const isAddedProduct = window.confirm("Are you sure added product?");
    if (isAddedProduct) {
      fetch("https://shielded-basin-18619.herokuapp.com/products", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.acknowledged) {
            alert("Product added successfully");
            reset();
          }
        });
    }
  };

  console.log(watch("example"));
  return (
    <Container>
      <h1 className="text-center fw-bold my-4">Insert a new product</h1>
      <form className="form-control" onSubmit={handleSubmit(onSubmit)}>
        <label>Product Name</label>
        <input
          className="form-control mb-3"
          {...register("name", { required: true })}
        />
        <label>Product Image Link</label>
        <input
          className="form-control mb-3"
          {...register("img", { required: true })}
        />
        <label>Product Price</label>
        <input
          type="number"
          className="form-control mb-3"
          {...register("price", { required: true })}
        />
        <label>Product Description</label>
        <textarea
          className="form-control mb-3"
          {...register("description", { required: true })}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );
};

export default InsertItem;
