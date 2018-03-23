import React from 'react';

const AuthorDetails = () => {
    return(
        <React.Fragment>
        <div>
            <img src='https://pbs.twimg.com/profile_images/3189860683/92f82a0ebd22b506a6d5012aed453737_400x400.jpeg' />
            <h2>Name Surname </h2>
            <p>username: my_cool_username</p>
            <p>email: my_cool@email.com</p>
            <p>phone: 333 555</p>
        </div>
        <div>
            <h2>Address</h2>
            <p>street: bla bla bla</p>
            <p>city: Gwennfjksd</p>
            <p>zipcode: 77068</p>
        </div>
        <div>
            <h2>Company</h2>
            <p>name: Gwennfjksd</p>
            <p>slogan: 77068</p>
        </div>
        </React.Fragment>
    )
}

export default AuthorDetails