'use strict';

function sum(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

/**
 * 
 * @param {number} arg1 - значение первого аргумента
 * @param {number} arg2 - значение второго аргумента 
 * @param {number} operation - строка с названием операции
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return sum(arg1, arg2);
        case "-":
            return subtraction(arg1, arg2);
        case "*":
            return multiplication(arg1, arg2);
        case "/":
            return division(arg1, arg2);
    }
}

console.log(mathOperation(16, 4, "+"));
console.log(mathOperation(16, 4, "-"));
console.log(mathOperation(16, 4, "*"));
console.log(mathOperation(16, 4, "/"));

