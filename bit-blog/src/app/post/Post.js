import React, { Component } from 'react'
import PostDetail from './PostDetail'
import TitlesFromSameAuthor from './TitlesFromSameAuthor'
import fetchPosts from '../../services/fetchPosts'

class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postData: [],
            userIdData : ''
        }
    }

    componentDidMount() {
        fetchPosts.Data2(this.props.match.params.id)
            .then((response) => {
                this.setState({
                    postData: response
                })
                fetchPosts.GetAuthorByUserId(response.userId).then((response)=>{
                    this.setState({
                        userIdData:response
                    })
                })
            })
           
    }

    render() {
        // console.log(this.state.postData)
        console.log(this.state.userIdData )

        return (
            <React.Fragment>
                <PostDetail title={this.state.postData.title} body={this.state.postData.body} authorName={this.state.userIdData.name} />
                <TitlesFromSameAuthor />
            </React.Fragment>
        )
    }
}
export default Post;