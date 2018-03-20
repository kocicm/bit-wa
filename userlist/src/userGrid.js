import React, { Component } from 'react';
import SingleGridUser from './singleGridUser';

class UserGrid extends Component {
    render() {
        return (
            <div className="row">
                {this.props.arr.map((item,i)=>{
                   return <SingleGridUser  src={item.picture.large} name={item.name.first} surname={item.name.last} email={item.email} birth={item.dob} key={i}/>    
                })}
            </div>
        )
    }
}

export default UserGrid
