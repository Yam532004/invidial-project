import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import { Navbar } from "./components/layout/Navbar";
import { Search } from "./components/users/Search";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <h1>Github Users Data</h1>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/*" component={NotFound}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
