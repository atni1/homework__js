'use strick';
function showSlice(obj) {
    let getNumber = parseInt(prompt('Введите число от 0 до 999'))
    let digit = {
        units: 0,
        tens: 0,
        hundreds: 0,
    }
    if (getNumber <= 9) {
       digit.units = getNumber 
       console.log(digit.units);
    }
    else if (getNumber <= 999) {
        digit.units = (getNumber % 10)
        digit.tens = parseInt(getNumber / 10 % 10)
        digit.hundreds = parseInt(getNumber / 100 % 10)
        console.log(digit)
    } else {
        console.log('Вы ввели некоректное значение, Введите число от 0 до 999!');
    }
}
showSlice()