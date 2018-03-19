import React, { Component } from 'react';
import './App.css';
import {postsData} from '../posts';
import {BlogPosts} from './blogPosts/BlogPosts';

class App extends Component {
  render() {
    return (<div>
      <h1 className="h1">Blog</h1>
      <BlogPosts arr={postsData} />
    </div>)
  }
}

export default App;
