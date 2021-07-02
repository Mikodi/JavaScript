'use strict';

function NumberCheck(num) {
    if ((Number.isInteger(num) && 0 <= num && num <= 999)) {
        return NumberRank(num);
    } else {
        console.log("Данные не соответсвуют допустимому значению");
        return {};
    }
}

function NumberRank(num) {
    return {
        units: num % 10,
        tens: Math.floor(num / 10) % 10,
        hundreds: Math.floor(num / 100),
    }
}

console.log(NumberCheck(Number(prompt("Введите число от 0 до 999"))));
