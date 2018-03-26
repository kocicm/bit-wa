import React from 'react';
import { Link } from 'react-router-dom';

const PostDetail = (props) => {
    return (
        <React.Fragment>
            <h2>{props.title}</h2>
            <Link to={`authorDetails/id`}>{props.authorName}</Link>
            <p>{props.body}</p>
            <hr />
        </React.Fragment>
    )

}

export default PostDetail