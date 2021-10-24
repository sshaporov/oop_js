class User {
    constructor(userName, password) {
        this.userName = userName,
        this.password = password
    }
    validatePassword() {
        if(this.password.length >= 12) return true

        return false
    }
}