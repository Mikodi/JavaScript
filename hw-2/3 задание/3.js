'use strict';

let a = -4;
let b = 8;
if (a >= 0 && b >= 0) {
    alert(a - b);
} else if (a < 0 && b < 0) {
    alert(a * b);
} else if (a >= 0 && b < 0 || a < 0 && b >= 0) {
    alert(a + b);
} else {
    alert("Нужно ввести числа");
}