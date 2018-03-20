import React, { Component } from 'react';

class SingleListUser extends Component {
   
        render() {
            return (
                <div className="collection-item avatar">
                    <img className="circle" src={this.props.src} />
                    <p className="title">{this.props.name} {this.props.surname}</p>
                    <p> <i className="tiny material-icons dp48">email</i> {this.props.email.slice(0,3)+"..."+this.props.email.slice(this.props.email.indexOf("@")-3,this.props.email.indexOf("@"))+this.props.email.slice(this.props.email.indexOf("@"))}</p>
                    <p><i className=" tiny material-icons dp48">cake</i> {new Date(this.props.birth).getDate()}.{new Date(this.props.birth).getMonth()+1}.{new Date(this.props.birth).getFullYear()}</p>
                </div>
            )
        }
    }

export default SingleListUser

