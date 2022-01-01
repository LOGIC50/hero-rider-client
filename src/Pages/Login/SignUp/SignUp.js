import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="sign-up">
      <h1>Sign Up Page</h1>
      <br />
      <Link
        to="/signUpRider"
        style={{ textDecoration: "none", color: "white" }}
      >
        <button className="button-29">Sign Up as a Rider</button>
      </Link>
      <br />

      <Link
        to="/signUpDriving"
        style={{ textDecoration: "none", color: "white" }}
      >
        <button className="button-29">
          Sign Up as a Driving Lesson Learner
        </button>
      </Link>
    </div>
  );
};

export default SignUp;
