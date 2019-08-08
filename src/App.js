import React from "react";
import Header from "./components/Header";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import routes from "./routes";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">
          <Header />
          {routes}
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
