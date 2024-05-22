import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/layout/Navbar";
import { Users } from "./components/users/User";
import { Search } from "./components/users/Search";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.github.com/users");
        setUsers(response.data);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <h1>Github Users Data</h1>
      </div>
      <Search />
      <Users users={users} />
    </div>
  );
}

export default App;
