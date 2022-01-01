import { CircularProgress } from "@mui/material";
import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <CircularProgress></CircularProgress>;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.admin ? (
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

export default AdminRoute;
