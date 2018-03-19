import React, { Component } from 'react';

export const SingleUser = (props) => {
    return (
        <div className="collection-item avatar">
            <img className="circle" src={props.src}/>
                <p className="title">name: {props.name}</p>
                <p> email: {props.email}</p>
                <p>date of  birth: {props.birth}</p>
        </div>
            )
  }