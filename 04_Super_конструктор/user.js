class User {
    constructor(name) {
        this.name = name
    }
    sayHello() {
        console.log(this.name + " Hello");
    }
}

class Person extends User {
    constructor(name, email) {
        super(name);
        this.email = email
    }
    sayHello() {
        super.sayHello()
    }
} 




class User1 {
    sayHello() {
        console.log(this.name + " Hello");
    }
}

class Person1 extends User1 {
    constructor(name) {
        super();
        this.name = name
    }
    sayHello() {
        super.sayHello()
    }
}