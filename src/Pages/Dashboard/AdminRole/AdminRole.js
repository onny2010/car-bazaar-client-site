import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";

const AdminRole = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://shielded-basin-18619.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  });

  const handleMakeAdmin = (id, role) => {
    const isRoleChange = window.confirm("Are you sure?");
    if (isRoleChange) {
      fetch(`https://shielded-basin-18619.herokuapp.com/users/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ role }),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.modifiedCount > 0) {
            let updatedUser = [];
            for (let user of users) {
              if (user._id === id) {
                user.role = role;
              }
              updatedUser.push(user);
            }
            setUsers(updatedUser);
            alert("Admin role change successfully");
          }
        });
    }
  };
  return (
    <Container>
      {users.map((user) => (
        <div className="border p-3 m-3">
          <h4>User Name: {user.displayName}</h4>
          <h4>User Email: {user.email}</h4>
          <h5>Role: {user.role}</h5>
          <Button
            onClick={() => handleMakeAdmin(user._id, "Admin")}
            className="me-3"
            disabled={user.role === "Admin"}
          >
            Make Admin
          </Button>
          <Button
            onClick={() => handleMakeAdmin(user._id, "User")}
            variant="danger"
            disabled={user.role === "User"}
          >
            Remove Admin
          </Button>
        </div>
      ))}
    </Container>
  );
};

export default AdminRole;
