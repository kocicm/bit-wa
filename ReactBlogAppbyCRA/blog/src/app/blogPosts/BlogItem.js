import React from 'react';
import PropTypes from "prop-types";

export const BlogItem = (props) => {
    return (
        <div className="blogElement">
            <h1 className="header">{props.title}</h1>
            <p>{props.body}</p>
        </div>
    )
  }

  BlogItem.defaultProps = {
      title : "title by default",
      body : "lorem"
  }

