import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Navbar.css";

const Navbar = () => {
  const { user, logout } = useAuth();
  const { userId } = useParams();
  const { activeUser, setActiveUser } = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/users/61d042224ca33a2c0f971b12`)
      .then((res) => res.json())
      .then((data) => setActiveUser(data));
  }, []);
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <Link class="navbar-brand" href="#">
          Hero Rider
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-link active" aria-current="page" to="/home">
              Home
            </Link>
            {user?.email ? (
              <Box>
                <Link
                  to="/home"
                  style={{
                    textDecoration: "none",
                    color: "brown",
                  }}
                >
                  <Button onClick={logout} color="inherit">
                    Logout
                  </Button>
                </Link>
                <span>Welcome: {user.displayName}</span>
                <Link
                  style={{ textDecoration: "none", paddingLeft: "20px" }}
                  to="/drivinglesson"
                >
                  Driving Lesson Package
                </Link>
              </Box>
            ) : (
              <Box style={{ display: "flex" }}>
                <Link class="nav-link active" aria-current="page" to="/login">
                  <button>Login</button>
                </Link>
                <Link class="nav-link active" aria-current="page" to="/signup">
                  <button>Sign up</button>
                </Link>
              </Box>
            )}
            <br />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
