import React, { Component } from 'react';
import '../App.css';
import UserList from "../userList";
import userData from "../services/UserServices"
import UserGrid from "../userGrid";
import Loading from "./Loading";
import About from "./About";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home"

class App extends Component {


  render() {
    return (
      <Switch>
        <Route path='/about' component={About} />   
        <Route path='/home' component={Home} />
        <Redirect from='/' to='/home' />
      </Switch>
    );
  }
}

export default App;

