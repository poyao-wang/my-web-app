import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import logo from "./logo.svg";

const Loader = () => (
  <div className="loder d-flex flex-column justify-content-center align-items-center">
    <img src={logo} className="App-logo" alt="logo" />
    <p>loading...</p>
  </div>
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
