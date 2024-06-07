import {
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

import Search from "../users/Search";
import User from "../users/User";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
function Home() {
  return (
    <div className="container">
      <h1>Github Users Data</h1>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/user/:id" component={User}></Route>
        <Route path="/*" component={NotFound}></Route>
      </Switch>
    </div>
  );
}
export default Home;
