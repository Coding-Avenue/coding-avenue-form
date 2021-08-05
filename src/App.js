import "./App.css";
import Home from "./components/Home";
import Confirmation from "./components/Confirmation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import con from "./assets/con.gif";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/success" exact>
          <Confirmation GIF={con} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
