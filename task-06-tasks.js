let input = confirm("Хотите ввести числа?");
let total = 0;

total = prompt();
total = ++total;

while (input) {
    input = +prompt();
    total += input;

}
alert(`Общая сумма чисел равна ${total}`);