import React, { Component } from 'react';
import SingleGridUser from './singleGridUser';

class UserGrid extends Component {
    render() {
        return (
            <div className="row">
                {this.props.arr.map((item, i) => {
                    return <SingleGridUser src={item.photo} name={item.name} first={item.first} email={item.email} birth={item.dob} gender={item.gender} key={i} />
                })}
            </div>
        )
    }
}

export default UserGrid
