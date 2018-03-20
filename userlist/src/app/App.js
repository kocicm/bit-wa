import React, { Component } from 'react';
import '../App.css';
import UserList from "../userList";
import userData from "../services/UserServices"
import UserGrid from "../userGrid"

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      showList: true
    }
  }

  componentDidMount() {
    userData.getData().then((response) => {
      this.setState({
        data: response

      })

    })
  }
  handleChange = () => {
    this.setState((prevState) =>{
    return {showList: !prevState.showList}
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <h1 className="App-title">React Users</h1>
            <div className="nav-wrapper">
              <ul className="right hide-on-med-and-down">
                <li><a  onClick={this.handleChange}><i className="material-icons">{this.state.showList ?  "view_module" : "list"}</i></a></li>
                <li><a href="collapsible.html"><i className="material-icons">refresh</i></a></li>
                
              </ul>
            </div>
          </nav>
        </header>
        {this.state.showList ? <UserList arr={this.state.data} /> : <UserGrid arr={this.state.data} />}
        <footer className="App-footer">
          <h5 className="App-footer">© Copyright BIT</h5>
        </footer>
      </div>
    );
  }
}

export default App;
