let total = 0;

// 1 ВАРИАНТ
// let input = confirm("Хотите ввести числа?");
// while (input) {
//     input = +prompt();
//     total += input;
// }
// alert(`Общая сумма чисел равна ${total}`);

// 2 ВАРИАНТ
// while (true) {
//     let input = prompt('Enter number');

//     if (input === null) {
//         alert('canceled by user');
//         break;
//     }

//     input = Number(input); // NaN

//     const notANumber = Number.isNaN(input); // true

//     if (notANumber) {
//         alert('Not a number entered');
//         continue;
//     }
//     total += input;
// }

// alert(`total amount ${total}`);