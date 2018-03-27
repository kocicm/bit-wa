
class AuthorData{
    constructor(fetchObj){
        this.id = fetchObj.id
        this.name = fetchObj.name
        this.username = fetchObj.username
        this.phone = fetchObj.phone
        this.email = fetchObj.email
        this.street = fetchObj.address.street
        this.city = fetchObj.address.city
        this.zip = fetchObj.address.zipcode
        this.cname = fetchObj.company.name
        this.slogan = fetchObj.company.catchPhrase
     
    }
}

export default AuthorData