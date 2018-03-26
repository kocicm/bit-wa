import React, { Component } from 'react';
import AuthorsItem from './AuthorsItem'
import fetchPosts from '../../services/fetchPosts'

class AuthorsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authorsList: []
        }
    }

    componentDidMount() {
        fetchPosts.GetAuthorsList().then((response) => {
            this.setState({
                authorsList: response,
            })
        })
    }
    render() {
        console.log(this.state.authorsList)
        return (
            <React.Fragment>
                <h3> Authors ({this.state.authorsList.length})</h3>

                {this.state.authorsList.map((el, i) => {
                    return <AuthorsItem name={el.name} id={el.id} key={i} />
                })
                }
            </React.Fragment>

        )
    }

}

export default AuthorsList