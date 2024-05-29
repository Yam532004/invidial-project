import axios from "axios";
import { useEffect, useState } from "react";
function Repos(props) {
    const username = props.username;
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}/repos`
        );
        const data = response.data;
        setRepos(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchRepos();
  }, [username]);
  return (
    <div>
      <h1>Repos</h1>
      <ul>
        {repos.map((repo) => (
          <li>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Repos;
