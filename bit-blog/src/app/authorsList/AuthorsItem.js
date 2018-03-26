import React from 'react';
import {Link} from 'react-router-dom'

const AuthorsItem = (props) => {
    return(
        <Link to={`/authorDetails/${props.id}`} >
        <h2> {props.name} </h2>
        </Link>
    )
}

export default AuthorsItem