import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const MyOrder = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`https://shielded-basin-18619.herokuapp.com/orders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  const handleDeleteOrder = (id) => {
    const isDelete = window.confirm("Are you sure delete order?");
    if (isDelete) {
      fetch(`https://shielded-basin-18619.herokuapp.com/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.acknowledged) {
            alert("Delete Successfully");
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  return (
    <Container>
      <h1>Manage all order</h1>
      {orders.map((order) => (
        <div key={order._id} className="border m-3 p-3">
          <h3>Product Name: {order.productName}</h3>
          <p>
            Price:{" "}
            <span className="fw-bold text-warning">${order.productPrice}</span>
          </p>
          <h5>Name: {order.name}</h5>
          <p>Email: {order.email}</p>
          <small>
            Status:
            <button className="btn-small btn-info rounded">
              {order.status}
            </button>
          </small>
          <br />
          <Button
            className="mt-3"
            onClick={() => handleDeleteOrder(order._id)}
            variant="danger"
          >
            Remove
          </Button>
        </div>
      ))}
    </Container>
  );
};

export default MyOrder;
