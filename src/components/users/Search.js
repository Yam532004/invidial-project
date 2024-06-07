import axios from "axios";
import React, { useEffect, useState } from "react";
import { Users } from "./Users";
const Search = () => {
  const currentSearch = localStorage.getItem("text");
  console.log("currentSearch ", currentSearch);
  const [text, setText] = useState("");
  const [users, setUsers] = useState([]);

  const searchUsers = async (text) => {
    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${text}`
      );
      setUsers(response.data.items);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  useEffect(() => {
    searchUsers(currentSearch);
  }, [currentSearch]);

  const clearUsers = () => {
    setUsers([]);
    if (typeof text === "string" && text.length > 0) {
      localStorage.setItem(text, ""); // Lưu trữ giá trị rỗng trong localStorage
    } else {
      console.error('The "text" variable must be a non-empty string');
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please enter something");
    } else {
      searchUsers(text);
      localStorage.setItem("text", text);
      setText("");
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search user"
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-success btn-block"
        />
      </form>
      {users.length > 0 && (
        <button className="btn btn-danger btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
      <Users users={users} />
    </div>
  );
};
export default Search;
