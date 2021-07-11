// Задание 3

var a = prompt('Введите первое число', '');
var b = prompt('Введите второе число', '');
var x;
if (a >= 0 && b >= 0) {
    x = a - b;
    alert(x);
} else if (a < 0 && b < 0){
        x = a * b
        alert(x);
} else if (a >= 0 && b < 0 || a <= 0 && b > 0) {
        x = +a + +b;
        alert();
}


// //Задание 4

// a = +prompt ('Введите число от 1 до 15');
// switch (a) {
// 	case 1:
// 		alert ( 'Ваше число 1');			
// 	case 2:
// 		alert ( 'Ваше число 2');			
// 	case 3:
// 		alert ( 'Ваше число 3');			
// 	case 4:
// 		alert ( 'Ваше число 4');			
// 	case 5:
// 		alert ( 'Ваше число 5');			
// 	case 6:
// 		alert ( 'Ваше число 6');			
// 	case 7:
// 		alert ( 'Ваше число 7');			
// 	case 8:
// 		alert ( 'Ваше число 8');			
// 	case 9:
// 		alert ( 'Ваше число 9');			
// 	case 10:
// 		alert ( 'Ваше число 10');			
// 	case 11:
// 		alert ( 'Ваше число 11');
// 	case 12:
// 		alert ( 'Ваше число 12');
// 	case 13:
// 		alert ( 'Ваше число 13');
// 	case 14:
// 		alert ( 'Ваше число 14');
// 	case 15:
// 		alert ( 'Ваше число 15');	
// }	


// Задание 5
// c = prompt('add a number')
// d = prompt('add a number')
// function sum(c, d) {
//     return +c + +d; 
// }
// function diff(c, d) {
//     confirm
//     return c - d
// }
// function split(c, d) {
//     return c / d
// }
// function multiplication(c, d) {
//     return c * d
// }
// let sumResult = sum(c, d)
// alert('Результат сложения ' + sumResult)
// let diffResult = diff(c, d)
// alert('Результат вычитания ' + diffResult)
// let splitResult = split(c, d)
// alert('Результат деления ' + splitResult)
// let multiResult = multiplication(c, d)
// alert('Результат умножения ' + multiResult)

// Задание 6

// function mathOperation(arg1, arg2, operation) {
//     switch (operation) {
//         case 'sum':
//             return arg1 + arg2;
//             break;
//         case 'diff':
//             return arg1 - arg2;
//             break;  
//         case 'split':
//             return arg1 / arg2;
//             break;  
//         case 'multiplication':
//             return arg1 * arg2;
//             break;         
//         default: 
//             break;
//     }
// }
// let result = mathOperation(2, 3, 'multiplication')
// alert(result)










