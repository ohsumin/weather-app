import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/weather/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
