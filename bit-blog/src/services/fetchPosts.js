import React, { Component } from 'react'
import PostData from "../entities/PostData";
import AuthorData from "../entities/AuthorData";

class fetchPosts1 extends Component {
    Data1() {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                return response.json()
            })
            .then((responseJson) => {
                return responseJson.map((el) => {
                    return new PostData(el)
                })
            })
    }
    Data2(param1) {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${param1}`)
            .then((response) => {
                return response.json()
            })
            .then((responseJson) => {
                return responseJson;
            })
    }
    GetAuthorByUserId(param) {
        return fetch(`https://jsonplaceholder.typicode.com/users/${param}`).then((response) => {
            return response.json()
        }).then((responseJson) => {
            return new AuthorData(responseJson)
        })
    }
    GetAuthorsList() {
        return fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
            return response.json()
        }).then((response) => {
            return response
        })
    }



}


const fetchPosts = new fetchPosts1()
export default fetchPosts