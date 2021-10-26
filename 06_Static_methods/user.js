class User {
    static test = true
    constructor(name) {
        this.name = name
    }
    static getRole(email) {
        // обращение к базе или другая логика
        return "student"
    }
}

const user = new User('Sergey')
console.log(user);

// статические методы можно вызвать без создания инстанса класса
// если в классе у метода нет влова static то я не могу к нему обратиться без создания инстанса класса (объекта)
console.log(User.getRole("test@test.com"));
console.log(User.test);
console.log(user.test); // статические свойства не наследуются
