import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; //React bootstrap
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import News from "./components/News";
import CustomNavbar from "./components/CustomNavbar";

function App() {
  return (
    <Router>
      <div>
        <CustomNavbar />
        <Route exact path="/" component={Home} />
        {/* <Route path="/about" component={About} />
        <Route path="/news" component={News} /> */}
      </div>
    </Router>
  );
}

export default App;
