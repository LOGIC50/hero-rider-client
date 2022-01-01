import { Container, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./DrivingLesson.css";

const Courses = [
  {
    img: 'https://i.ibb.co/Mh8Mw0b/d1.jpg"',
    name: "Car Driving Lesson Course",
    price: 200,
  },
  {
    img: "https://i.ibb.co/j30QQHc/d2.jpg",
    name: "Bike Driving Lesson Course",
    price: 100,
  },
];

const DrivingLesson = () => {
  return (
    <Container>
      <Grid container spacing={4} style={{ margin: "100px auto" }}>
        {Courses.map((course) => (
          <Grid item xs={12} md={6} className="course-box">
            <div className="course-card">
              <img
                style={{ width: "70%", margin: "20px auto" }}
                src={course.img}
                alt=""
              />
              <h3>{course.name}</h3>
              <h5>Price: ${course.price}</h5>
              <br />
              <Link to="/purchase" style={{ textDecoration: "none" }}>
                <button style={{ marginBottom: "20px" }}>Purchase</button>
              </Link>
              <br />
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DrivingLesson;
