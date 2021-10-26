// 1. нижнее подчеркивание
class User1 {
    setName(name) {
        this._name = name.trim().toLowerCase()
    }
    getName() {
        return this._name
    }
}

const user1 = new User1()

// console.log(user1.getName());
// user1.setName('Sergey');
// console.log(user1.getName());
// console.log('user1 >>', user1);

// 2. get - set
class User2 {
    set name(name) {
        this._name = name.trim().toLowerCase()
    }
    get name() {
        return this._name
    }
}

const user2 = new User2()

// console.log(user2.name);
// user2.name = 'Sergey';
// console.log(user2.name);
// console.log('user2 >>', user2);
// console.log(user2._name);

// 3. Приватные свойства #
class User3 {
    #test = true // доступно только внутри самого класса
    checkTestUser() {
        return this.#test
    }
    changeTestUser(flag) {
        this.#test = flag
    }
    setName(name) {
        this._name = name.trim().toLowerCase()
    }
    getName() {
        return this._name
    }
}
const user3 = new User3()
console.log('user3 >>', user3);
console.log(user3.checkTestUser());
// console.log(user3.#test); // Не доступно в объекте созданного при помощи класса с приватным методом

class User4 extends User3 {}
const user4 = new User4()
user4.setName('Sergey')

console.log(user4.getName());
console.log(user4.checkTestUser());
user4.changeTestUser(false)
console.log(user4.checkTestUser());





