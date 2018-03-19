import React from 'react';
import {BlogItem} from './BlogItem';

export const BlogPosts = (props) => {
    return (<div className="div">
        {props.arr.map((item, i) => <BlogItem title={item.title} body={item.body} key={i}/>)}
    </div>
    )
  }
