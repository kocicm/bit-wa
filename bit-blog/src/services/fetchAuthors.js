import AuthorData from "../entities/AuthorData"

const fetchAuthors = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            return response.json()
        })
        .then((responseJson) => {
            return responseJson.map((el) => {
                return new AuthorData(el)
            }
            )
        })

}

export default fetchAuthors