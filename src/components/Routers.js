import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Profile from "./Profile";
import Experience from "./Experience";
import Projects from "./Projects";
import EQ from "./EQ";
import Contact from "./Contact";

export default function Routers() {
  return (
    <Router>
      <Switch>
        <Route path="/aboutme">
          <Profile />
        </Route>
        <Route path="/education">
          <EQ />
        </Route>
        <Route path="/experience">
          <Experience />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contactme">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}
