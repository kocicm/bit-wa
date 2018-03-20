import React, { Component } from 'react';

class UserData extends Component {
    getData() {
        return fetch("https://randomuser.me/api/?results=15")
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                const results = response.results
                return results;
            })
    }
}
const userData = new UserData();
export default userData ;

