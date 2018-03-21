import React, { Component } from 'react';
import SingleListUser from './singleListUser';


class UserList extends Component {
    render() {
        return (
            <div className="collection">
                {this.props.arr.map((item, i) => <SingleListUser src={item.photo} name={item.name} email={item.email} birth={item.dob} gender={item.gender} key={i} />)}
            </div>
        )
    }
}
export default UserList