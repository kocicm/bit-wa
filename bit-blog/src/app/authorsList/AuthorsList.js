import React from 'react';
import AuthorsItem from './AuthorsItem'

const AuthorsList = () => {
    return (
        <React.Fragment>
            <h3> Authors (5)</h3>
            <AuthorsItem />
            <AuthorsItem />
            <AuthorsItem />
            <AuthorsItem />
            <AuthorsItem />
        </React.Fragment>

    )

}

export default AuthorsList