import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./Login.css";

import { NavLink, useLocation, useHistory, Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { isLoading, loginUser, authError, user } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };
  return (
    <div className="login-container">
      <Container>
        <Grid container spacing={2}>
          <Grid sx={{ mt: 4 }} item xs={12} md={12} className="login">
            <Typography variant="body1" gutterBottom>
              Login
            </Typography>
            {!isLoading && (
              <form onSubmit={handleLoginSubmit}>
                <TextField
                  // required
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Your Email"
                  name="email"
                  onBlur={handleOnChange}
                  variant="standard"
                />
                <TextField
                  // required
                  sx={{ width: "75%", m: 1 }}
                  type="password"
                  id="standard-basic"
                  label="Your Password"
                  name="password"
                  onBlur={handleOnChange}
                  variant="standard"
                />
                <Button
                  type="submit"
                  sx={{ width: "75%", m: 1 }}
                  variant="contained"
                >
                  Login
                </Button>
                <NavLink style={{ textDecoration: "none" }} to="/signup">
                  <Button sx={{ width: "75%", m: 1 }} variant="text">
                    New User? Please Sign Up
                  </Button>
                </NavLink>
              </form>
            )}
            <br />
            {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success">Login successfully</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
