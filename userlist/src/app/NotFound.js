import React, { Component } from 'react';

class NotFound extends Component {
    render() {
        return (
            <div className="collection center">
                <i className="material-icons large">sentiment_neutral</i>
                <h2>We coudn't find any people matching your search</h2>
            </div>
        )
    }

}

export default NotFound;