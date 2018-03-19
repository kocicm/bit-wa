import React from 'react';
import {SingleUser} from './singleUser';


export const UserList = (props) => {
    return (
    <div className="collection">
        {props.arr.map((item, i) => <SingleUser src={item.picture.thumbnail} name={item.name.first} email={item.email} birth={item.dob} key={i}/>)}
    </div>
    )
  }
