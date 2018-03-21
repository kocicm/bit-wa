import React, { Component } from 'react';
import User from "../entities/User";

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
            .then((users) => {
                return users.map((userData) => {
                    return new User(userData);
                })
            })
    }
}
const userData = new UserData();
export default userData ;

