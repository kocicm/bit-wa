import React, { Component } from 'react';
import '../App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import Home from './home/Home';
import Post from './post/Post';
import CreatePost from './createPost/CreatePost';
import AuthorsList from './authorsList/AuthorsList';
import Author from './author/Author';
import AuthorDetails from './author/AuthorDetails';
import About from './about/About';


class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Header/>
     <Switch>
        <Route exact path='/home'  component={Home} />
        <Route exact path='/post/create' component={CreatePost} />
        <Route  path='/post/:id' component={Post} />
        <Route path='/authorDetails/:userId' component={AuthorDetails} />
        <Route exact path='/authors' component={AuthorsList} />
        <Route exact path='/author' component={Author} />
        <Route exact path='/about' component={About} />
       
       
        {/* <Route path='/authors' component={Authors} />
        <Route path='/about' component={About} /> */}
        <Redirect path='/' to="/home" />
      </Switch> 
   
      <Footer/>
      </React.Fragment>
    );
  }
}

export default App;


// /1234
// /12
// /23