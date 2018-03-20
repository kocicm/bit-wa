import React, { Component } from 'react';
import SingleListUser from './singleListUser';


class UserList extends Component {
    render() {
        return (
            <div className="collection">
                {this.props.arr.map((item, i) => <SingleListUser src={item.picture.thumbnail} name={item.name.first} surname={item.name.last} email={item.email} birth={item.dob} key={i} />)}
            </div>
        )
    }
}
export default UserList