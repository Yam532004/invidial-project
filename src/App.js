import React, { useEffect, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import { Navbar } from "./components/layout/Navbar";

import Home from "./components/layout/Home";
function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const toggleThem = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`App ${theme}`}>
      <Router>
        <button onClick={toggleThem}>Toggle Them</button>
        <Navbar />
        <Home />
      </Router>
    </div>
  );
}

export default App;
