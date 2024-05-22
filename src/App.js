import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import { Navbar } from "./components/layout/Navbar";
import { Search } from "./components/users/Search";

function App() {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("https://api.github.com/users");
  //       setUsers(response.data);
  //     } catch (error) {
  //       console.log("Error fetching data: ", error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <h1>Github Users Data</h1>
          <Switch>
            <Route exact path="/" component={Search} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
