class User {
    constructor(userData) {
        this.name = `${userData.name.first} ${userData.name.last}`,
        this.photo = userData.picture.large,
        this.dob = userData.dob,
        this.email = userData.email,
        this.gender = userData.gender
    }
}

export default User;