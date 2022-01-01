import React from "react";

import "./Home.css";

const Home = () => {
  return (
    <div className="box">
      <div class="box-text">
        <h2 style={{ fontSize: "3rem" }}>
          Some call it adventure, We call it life.
        </h2>
        <h1n style={{ fontSize: "4rem" }}>Hero Riders</h1n>
        {/* {activeUser.image2 ? (
          <Link to="/login">Explore Course</Link>
        ) : (
          <h6>Feel free to enjoy rides</h6>
        )} */}
      </div>
    </div>
  );
};

export default Home;
