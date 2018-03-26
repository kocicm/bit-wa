import React from 'react';
import PostItem from './PostItem'

const PostList = (props) => {
    return (
        <React.Fragment>
         {props.postDataArr.map((el)=>{
              return <PostItem title={el.title} body={el.body} id={el.id} key={el.id}/>
         })}
        </React.Fragment>
    )
}
export default PostList