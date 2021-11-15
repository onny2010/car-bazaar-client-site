import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const PrivetRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <h3 className="text-center my-5">Loading...</h3>;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivetRoute;
