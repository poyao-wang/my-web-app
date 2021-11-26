import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PageHome from "./components/PageHome";

const App: React.FC = () => {
  return (
    <Suspense fallback="loading">
      <div className="App">
        <Router>
          <Route exact path="/" component={PageHome} />
        </Router>
      </div>
    </Suspense>
  );
};

export default App;
