const button1 =  document.querySelector('.b-1')
const button2 =  document.querySelector('.b-2')
const button3 =  document.querySelector('.b-3')
const button4 =  document.querySelector('.b-4')
const button5 =  document.querySelector('.b-5')

// button1.onclick = setOrangeBacground

function setOrangeBacground() {
    this.style.background = 'orange'
}

// Call()
// setOrangeBacground.call(button1) // сразу вызов функции
button1.onclick = function() {   // хитрость - обернуть call() в функцию и тогда вызов call() будет происходить по клику
    setOrangeBacground.call(button1)
}

button2.onclick = function() {   // кликаю на кнопку 2 а окрашивается кнопка 1
    setOrangeBacground.call(button1)
}

// Apply()
function setBackgroundColor(color, num) {
    console.log(this);
    console.log(num);
    this.style.background = color
}

button3.onclick = function() {
    setBackgroundColor.apply(button3, ['red', 3])
}

// Bind()
function setBackground(color) {
    this.style.background = color
}
const setGreenButton4 = setBackground.bind(button4, 'green') // привязываем контекст
const setRedButton5 = setBackground.bind(button5, 'red')

button4.onclick = setRedButton5



