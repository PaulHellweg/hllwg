import "./App.css";

import React from "react";

import logo from "./logo.svg";
import { ComingSoonPage } from "./views/ComingSoon";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComingSoonPage />
      </header>
    </div>
  );
}

export default App;
