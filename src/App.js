import React from "react";
import Header from "./components/Header";
import { HashRouter, Link } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        {routes}
      </div>
    </HashRouter>
  );
}

export default App;
