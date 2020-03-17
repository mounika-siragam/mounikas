import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import { Route, Switch } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import Todos from "./components/todos";
class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/todos" exact component={Todos} />
        </Switch>
      </div>
    );
  }
}

export default App;
