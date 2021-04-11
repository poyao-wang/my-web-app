import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; //React bootstrap
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import CustomNavbar from "./components/CustomNavbar";

function App() {
  return (
    <Router>
      <div>
        <CustomNavbar />
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
