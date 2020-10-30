import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <main className="py-3">
          <Route path="/" component={HomePage} />
        </main>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
