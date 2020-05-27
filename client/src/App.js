import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import "./assets/css/style.css";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/saved">
          <Saved />
        </Route>
        <Route>
          <Search />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
