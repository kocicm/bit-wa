import React from 'react';
import {Link} from 'react-router-dom'

const PostItem = (props) => {
    return (
        <React.Fragment>
            <Link to={`/post/${props.id}`}><h4>{props.title}</h4>
                <p>{props.body.slice(0,40)}...</p>
            </Link>
        </React.Fragment>
    )
}
export default PostItem;