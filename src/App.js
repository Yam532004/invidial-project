import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import { Navbar } from "./components/layout/Navbar";

import Home from "./components/layout/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Home />
      </Router>
    </div>
  );
}

export default App;
