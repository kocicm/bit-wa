import React, { Component } from 'react'
import PostList from './PostList'
import fetchPosts from '../../services/fetchPosts';

class Home extends Component {
    constructor(props) {
        super(props);
        
        this.state ={
            postData : [],
        }
    }
    componentDidMount(){
        fetchPosts.Data1().then((response)=>{
            console.log(response)
            this.setState({
                postData: response,
            })
        })
    }

    render() {
        return (
            <PostList postDataArr={this.state.postData}/>
        )
    }
}
export default Home