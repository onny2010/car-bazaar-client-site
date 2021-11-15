import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
const Register = () => {
  const { registerUser, error } = useAuth();
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (data.password === data.password2) {
      registerUser(data.email, data.password, data.name, history);
    }

    console.log(data);
  };
  return (
    <Container>
      <h1 className="text-center fw-bold my-4">Please Sign Up</h1>
      {error && <p className="text-center my-3 text-danger">{error}</p>}
      <form className="form-control mb-3" onSubmit={handleSubmit(onSubmit)}>
        <label>Name:</label>
        <input
          className="form-control mb-3"
          {...register("name", { required: true })}
        />
        <label>Email:</label>
        <input
          className="form-control mb-3"
          {...register("email", { required: true })}
        />
        <label>Password:</label>
        <input
          className="form-control mb-3"
          type="password"
          {...register("password", { required: true })}
        />
        <label>Retype Password:</label>
        <input
          className="form-control mb-3"
          type="password"
          {...register("password2", { required: true })}
        />
        <input className="btn btn-primary" type="submit" />
      </form>
      <h2 className="text-center my-3">
        Already register? <Link to="/login">Sign In</Link>
      </h2>
    </Container>
  );
};

export default Register;
