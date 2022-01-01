import React, { useState } from "react";
import "./SignUpRider.css";
import {
  Alert,
  Button,
  CircularProgress,
  Container,
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const SignUpRider = () => {
  const [loginData, setLoginData] = useState({});
  const { registerUser, isLoading, user, authError } = useAuth();
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    // console.log(setLoginData);
  };

  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(loginData, history);
    e.preventDefault();
    console.log(loginData);
  };
  return (
    <div className="sign-up-rider">
      <Container>
        <Grid container spacing={2}>
          <Grid
            sx={{ mt: 8 }}
            item
            xs={12}
            md={12}
            style={{ backgroundColor: "white", marginBottom: "50px" }}
          >
            <Typography variant="h5" gutterBottom>
              Sign Up as a Rider
            </Typography>
            {!isLoading && (
              <form onSubmit={handleLoginSubmit}>
                <TextField
                  required
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Your Name"
                  name="name"
                  type="text"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <TextField
                  required
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Your Email"
                  name="email"
                  type="email"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <TextField
                  required
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Your Age"
                  name="age"
                  type="number"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <TextField
                  required
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Address"
                  name="address"
                  type="text"
                  onBlur={handleOnBlur}
                  variant="standard"
                />

                <TextField
                  required
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Your Phone Number"
                  name="phone"
                  type="number"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <p style={{ marginBottom: "0px" }}>
                  Your Driving License Image
                </p>
                <Input
                  required
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Your Driving License Image"
                  name="image"
                  type="file"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <p style={{ marginBottom: "0px" }}>Your NID image</p>
                <Input
                  required
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Your NID Image"
                  name="image2"
                  type="file"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <p style={{ marginBottom: "0px" }}>Your Profile Photo</p>
                <Input
                  required
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Your Profile Photo"
                  name="image3"
                  type="file"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <TextField
                  required
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Car Name"
                  name="carName"
                  type="text"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <TextField
                  required
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Car Model"
                  name="carModel"
                  type="text"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <TextField
                  required
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Car Name Plate"
                  name="carNamePlate"
                  type="text"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <FormControl required sx={{ width: "75%", m: 1 }}>
                  <InputLabel id="demo-simple-select-label">
                    Vehicle Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Age"
                    name="vehicleType"
                    onBlur={handleOnBlur}
                  >
                    <MenuItem value={"car"}>car</MenuItem>
                    <MenuItem value={"bike"}>Bike</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  required
                  sx={{ width: "75%", m: 1 }}
                  type="password"
                  id="standard-basic"
                  label="Your Password"
                  name="password"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <TextField
                  required
                  sx={{ width: "75%", m: 1 }}
                  type="password"
                  id="standard-basic"
                  label="Confirm Password"
                  name="password2"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <Button
                  type="submit"
                  sx={{ width: "75%", m: 1 }}
                  variant="contained"
                >
                  Register
                </Button>
                <NavLink style={{ textDecoration: "none" }} to="/login">
                  <Button sx={{ width: "75%", m: 1 }} variant="text">
                    Already Registered? Please Login
                  </Button>
                </NavLink>
              </form>
            )}
            {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success">User Created successfully</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SignUpRider;
