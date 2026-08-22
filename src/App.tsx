import React, { Suspense } from "react";

import PageHome from "./components/PageHome";

const App: React.FC = () => {
  return (
    <Suspense fallback="loading">
      <div className="App">
        <PageHome />
      </div>
    </Suspense>
  );
};

export default App;
