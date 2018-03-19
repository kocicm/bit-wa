import React, { Component } from 'react';
import '../App.css';
import {usersData} from "../users.js"
import {UserList} from "../userList"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Users</h1>
        </header>
       <UserList arr={usersData}/>
        <footer className="App-footer">
          <h5 className="App-footer">© Copyright BIT</h5>
        </footer>
      </div>
    );
  }
}

export default App;
