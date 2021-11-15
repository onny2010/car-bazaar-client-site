import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import Booking from "./Pages/Booking/Booking";
import Home from "./Pages/Home/Home/Home";
import Register from "./Pages/Login/Register/Register";
import Login from "./Pages/Login/Login/Login";
import PrivetRoute from "./Pages/Login/PrivetRoute/PrivetRoute";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Explore from "./Pages/Explore/Explore";
import About from "./Pages/About/About";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/explore">
            <Explore></Explore>
          </Route>
          <PrivetRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivetRoute>
          <PrivetRoute path="/booking/:id">
            <Booking></Booking>
          </PrivetRoute>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
