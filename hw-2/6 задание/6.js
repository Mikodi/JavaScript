'use strict';

let money = prompt("Введите сумму денег, которую желаете перечислить")

if (/[a-zA-Zа-яА-я]+/gm.test(money) || money.length == 0 || money === "0") {
    throw new Error("Нужно ввести желаемую сумму денег");
}

let MoneyLenght = money.length;
let LastNumber = money.charAt(MoneyLenght - 1);

switch (LastNumber) {
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
        alert(`Ваша сумма в ${money} рублей успешно зачислена.`);
        break;
    case "1":
        alert(`Ваша сумма в ${money} рубль успешно зачислена.`);
        break;
    case "2":
    case "3":
    case "4":
        alert(`Ваша сумма в ${money} рубля успешно зачислена.`);
        break;
}



