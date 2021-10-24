class Student extends User {
    constructor(userName, password, firstName, secondName) {
        super(userName, password),
        this.firstName = firstName,
        this.secondName = secondName
    }
    validatePassword() {
        if(super.validatePassword()) {
            this.password = this.password.trim().toLowerCase()
            return true
        } else {
            return false
        }
    }
}

