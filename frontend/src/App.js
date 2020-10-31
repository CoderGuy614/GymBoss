import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserDashboard from "./components/UserDashboard";
import AdminDashboard from "./components/AdminDashboard";
import UserDetails from "./components/UserDetails";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Route path="/" component={HomePage} exact />
        <Switch>
          <Route path="/login" component={Login} exact />
          <Route path="/signup" component={Signup} exact />
          <Route path="/user-dashboard" component={UserDashboard} exact />
          <Route path="/admin-dashboard" component={AdminDashboard} exact />
          <Route path="/users/:id" component={UserDetails} exact />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
