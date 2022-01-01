import "./App.css";
import Home from "./Pages/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Pages/Login/Login/Login";
import SignUp from "./Pages/Login/SignUp/SignUp";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import SignUpRider from "./Pages/Login/SignUpRider/SignUpRider";
import SignUpDriving from "./Pages/Login/SignUpDriving/SignUpDriving";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import DrivingLesson from "./Pages/DrivingLesson/DrivingLesson";
import Purchase from "./Purchase/Purchase";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";
import Footer from "./Pages/Shared/Footer/Footer";
// import Login from "./Pages/Login/Login/Login";
// import Register from "./Pages/Login/Register/Register";
// import AuthProvider from "./Context/AuthProvider/AuthProvider";
// import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
// import Purchase from "./Pages/Purchase/Purchase";
// import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
// import ExpolreProducts from "./Pages/ExploreProducts/ExpolreProducts";
// import ReviewAll from "./Pages/Home/ReviewAll/ReviewAll";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar></Navbar>
          <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route path="/signUpRider">
                <SignUpRider />
              </Route>
              <Route path="/signUpDriving">
                <SignUpDriving />
              </Route>
              <Route path="/drivinglesson">
                <DrivingLesson />
              </Route>
              <PrivateRoute path="/purchase">
                <Purchase />
              </PrivateRoute>
            </Switch>
          </div>
        </Router>
      </AuthProvider>
      <Footer></Footer>
    </div>
  );
}

export default App;
