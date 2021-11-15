import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useHistory, useLocation } from "react-router-dom";

const Login = () => {
  const { handleSignIn, error } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    handleSignIn(data.email, data.password, history, location);

    console.log(data);
  };
  return (
    <Container>
      <h1 className="text-center fw-bold my-4">login</h1>
      {error && <p className="text-center my-3 text-danger">{error}</p>}
      <form className="form-control mb-3" onSubmit={handleSubmit(onSubmit)}>
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

        <input className="btn btn-primary" type="submit" />
      </form>
      <h2 className="text-center my-3">
        New user? <Link to="/register">Sign Up</Link>
      </h2>
    </Container>
  );
};

export default Login;
