let obj_1 = {
    "text": "test",
    "color": "red",
    "showColor": function () {
        console.log(this.color)
    },
    "showFontSize": function () {
        console.log(this.fontSize)
    }
}
console.log('obj_1 >>', obj_1)
console.log('proto >>', obj_1.__proto__)
console.log('Object.getPrototypeOf(obj) >>', Object.getPrototypeOf(obj_1))

let obj_2 = {
    "text": "test",
    "color": "red",
    "fontSize": "24px"
}
console.log('obj_2 >>', obj_2)


// __proto__ - это геттер/сеттер для объßекта прототипа
// https://learn.javascript.ru/prototype-methods - ЧИТАТЬ ОБЯЗАТЕЛЬНО !!!!!
// прототипное программирование - это основа ООП в JS
// чтобы не дублировать код в obj_2 можно указать в качестве протопита родителя нужный нам объект
// наследование obj_1 -> obj_3
let obj_3 = {
    "fontSize": "24px",
    __proto__: obj_1
}
console.log('obj_3 >>', obj_3)
console.log('obj_3 >>', obj_3.text)   // ссылается на obj_1.text через прототип (__proto__)
console.log('obj_3 >>', obj_3.color)  // ссылается на obj_1.text через прототип (__proto__)


// как поведет себя this при прототипном наследовании?
obj_3.showColor()
obj_3.color = 'green'
obj_3.showColor() // this указывает на объект с которым мы работаем
obj_1.showColor()

obj_3.showFontSize() // 24px стр 29
obj_1.showFontSize() // undefined тк в obj_1 нет свойства fontSize


// цепочка наследования obj_1 -> obj_3 -> obj_4
let obj_4 = {
    "fontFamily": "Verdana",
    __proto__: obj_3,
}
console.log('obj_4 >>', obj_4)


// в прототипном программирование иногда нужно понять к какому объекту относится свойство (из цепочки протипов)
// Object.prototype.hasOwnProperty()
console.log(obj_4.hasOwnProperty("fontFamily"))
console.log(obj_4.hasOwnProperty("text"))




