import React, { Component } from 'react';
import '../App.css';
import UserList from "../userList";
import userData from "../services/UserServices"
import UserGrid from "../userGrid";
import Loading from "./Loading";
import About from "./About";
import { Link, Switch, Route, Redirect } from "react-router-dom";


class Home extends Component {

    constructor(props) {
      super(props)
      this.state = {
        data: [],
        showGrid: false,
        inputValue: '',
        search: []
  
      }
      console.log(this.state.data);
    }
  
  
    componentDidMount() {
      let view;
  
      if (localStorage.getItem('gridView') == "true") {
        view = false;
      } else {
        view = true
      }
  
      userData.getData().then((response) => {
        this.setState({
          data: response,
          search: response,
          showGrid: view
        })
      })
    }
  
    handleChange = () => {
      localStorage.setItem('gridView', this.state.showGrid)

      this.setState((prevState) => {
        return { showGrid: !prevState.showGrid }
      })
  
    }

    typing = (event) => {
      this.setState({
        inputValue: event.target.value,
        search: this.state.data.filter(el => {
          return el.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
        })
      })
      console.log(this.state.search)
  
    }
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <nav>
              <h1 className="App-title">BIT People</h1>
              <div className="nav-wrapper">
                <ul className="right hide-on-med-and-down">
                 <li><Link to='/about'>About</Link></li>
  
                  <li><a onClick={this.handleChange}><i className="material-icons">{this.state.showGrid ? "view_module" : "list"}</i></a></li>
                  <li><a href="collapsible.html"><i className="material-icons">refresh</i></a></li>
  
                </ul>
              </div>
  
            </nav>
  
          </header>
  
          <nav>
            <div className="nav-wrapper">
              <form>
                <div className="input-field">
                  <input id="search" onChange={this.typing} value={this.state.inputValue} type="search" required />
                  <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                  <i className="material-icons">close</i>
                </div>
              </form>
            </div>
          </nav>
          {this.state.data.length == 0 ? <Loading /> : ""}
       
  
          {this.state.showGrid ? <UserList arr={this.state.search} /> : <UserGrid arr={this.state.search} />}
          <footer className="App-footer">
            <h5 className="App-footer">© Copyright BIT</h5>
          </footer>
        </div>
      );
    }
  }
  
  export default Home;
  
  