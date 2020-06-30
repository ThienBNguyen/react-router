import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

//Pages
import MainPage from "./pages";
import NotFoundPage from "./pages/404";
import UserPage from "./pages/users";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/404" component={NotFoundPage} />
          <Route exact path="/users" component={UserPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}

export default App;
