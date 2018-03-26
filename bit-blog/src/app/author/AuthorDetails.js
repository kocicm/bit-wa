import React, { Component } from 'react';
import fetchPosts from '../../services/fetchPosts';


class AuthorDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authorDetail : '',
        }
    }

    componentDidMount() {
        fetchPosts.GetAuthorByUserId(this.props.match.params.userId).then((response)=>{
            this.setState({
                authorDetail : response,
            })
        })
    }
    render() {
        console.log(this.state.authorDetail);
        
        return (
            <React.Fragment>
                <div>
                    <img src='https://pbs.twimg.com/profile_images/3189860683/92f82a0ebd22b506a6d5012aed453737_400x400.jpeg' alt='baja-patak' />
                    <h2>{this.state.authorDetail.name} </h2>
                    <p>username: {this.state.authorDetail.username}</p>
                    <p>email: {this.state.authorDetail.email}</p>
                    <p>phone: {this.state.authorDetail.phone}</p>
                </div>
                <div>
                    <h2>Address</h2>
                    <p>street: {this.state.authorDetail.street}</p>
                    <p>city: {this.state.authorDetail.city}</p>
                    <p>zipcode: {this.state.authorDetail.zip}</p>
                </div>
                <div>
                    <h2>Company</h2>
                    <p>name: Gwennfjksd</p>
                    <p>slogan: 77068</p>
                </div>
            </React.Fragment>
        )
    }
}

export default AuthorDetails