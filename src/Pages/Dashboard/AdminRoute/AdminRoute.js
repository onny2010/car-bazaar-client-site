import React from "react";

import useAuth from "../../../hooks/useAuth";
import { Route, Redirect } from "react-router-dom";

const AdminRoute = ({ children, ...rest }) => {
  const { admin, adminLoading } = useAuth();
  if (adminLoading) {
    return <h3 className="text-center my-5">Loading...</h3>;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
