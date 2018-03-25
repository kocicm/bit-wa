import React from 'react'
import PostDetail from './PostDetail'
import TitlesFromSameAuthor from './TitlesFromSameAuthor'

const Post = () =>{
    return (
        <React.Fragment>
            <PostDetail/>
            <TitlesFromSameAuthor/>
        </React.Fragment>
    )
}
export default Post;