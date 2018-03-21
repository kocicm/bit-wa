import React, { Component } from 'react';

class SingleGridUser extends Component {
  
    render() {
        return (
            <div className="col s12 m4">
                <div className={["card" ,((this.props.gender == "female") ? "redish" : "")].join(" ")}>
                    <div className="card-image">
                        <img src={this.props.src} />
                        <span className="card-title">{this.props.name}</span>
                    </div>
                    <div className="card-content">
                        <p>{this.props.email.slice(0, 3) + "..." + this.props.email.slice(this.props.email.indexOf("@") - 3, this.props.email.indexOf("@")) + this.props.email.slice(this.props.email.indexOf("@"))} </p>
                        <p>{new Date(this.props.birth).getDate()}.{new Date(this.props.birth).getMonth() + 1}.{new Date(this.props.birth).getFullYear()}</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default SingleGridUser;