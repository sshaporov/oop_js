console.log(this);

// document.querySelector('.b-1').onclick = function() {  // со стрелочной функцией работать не будет
//     console.log(this);
//     this.style.background = 'orange'
// }

function setOrangeColor() {
    console.log(this);
    this.style.background = 'orange'
}

let paragraphs = document.querySelectorAll('p')
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].onclick = setOrangeColor;     // не нужно вызывать сразу вункцию если вешаешь обработчик событий
}

// --------
document.querySelector('.b-1').addEventListener('click', setOrangeColor)

// --------
class U2 {
    constructor(model) {
        this.model = model
    }
    showThis() {
        console.log(this)  // this указывает на сам объект
    }
}

const boat = new U2('744')
boat.showThis()

const boat2 = new U2('344')
boat2.showThis()

// --------
class YellowBoat extends U2 {
    constructor(model, color) {
        super(model)
        this.color = color
    }
}

const yellow = new YellowBoat('144', 'yellow')
console.log(yellow);
