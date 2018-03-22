import React, { Component } from 'react';
import SingleListUser from './singleListUser';


class UserList extends Component {
    render() {
        return (
            <div className="collection">
                {this.props.arr.map((item, i) => <SingleListUser src={item.photo} name={item.name} last={item.last} first={item.first} email={item.email} birth={item.dob} gender={item.gender} key={i} />)}
            </div>
        )
    }
}
export default UserList