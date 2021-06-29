'use strict';

for (let i = 1; i <= 20; i++) {
    let a = "";
    while (a.length < i) {
        a += "x";
    }
    console.log(a);
}