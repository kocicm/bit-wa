import React from 'react';
import { Link } from 'react-router-dom';

const PostDetail = (props) => {
    
    console.log(props.title)
    return (
        
        <React.Fragment>
            <h2>{props.title}</h2>
            <Link to={`/authorDetails/${props.userId}`}><h4>{    console.log(props.userId)
}{props.authorName}</h4></Link>
            <p>{props.body}</p>
            <hr />
        </React.Fragment>
    )
    
}

export default PostDetail