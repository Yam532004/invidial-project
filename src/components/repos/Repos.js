import RepoItem from "./RepoItem";
function Repos({ props }) {
  const repos = props;
  return repos.map((repo) => <RepoItem props={repo} />);
}
export default Repos;
