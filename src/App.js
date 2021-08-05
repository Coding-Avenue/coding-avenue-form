import "./App.css";
import Home from "./components/Home";
import Confirmation from "./components/Confirmation";
import PageNotFound from "./components/PageNotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import con from "./assets/con.gif";
import image from "./assets/404.png";
import { useState } from "react";

function App() {
  const [isFormComplete, setIsFormComplete] = useState(false);
  return (
    <Router>
      <Switch>
        <Route path="/success" exact="true">
          {isFormComplete ? (
            <Confirmation GIF={con} />
          ) : (
            <PageNotFound image={image} />
          )}
        </Route>
        <Route path="/" exact="true">
          <Home setIsFormComplete={setIsFormComplete} />
        </Route>
        <Route path="*" exact="true">
          <PageNotFound image={image} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
