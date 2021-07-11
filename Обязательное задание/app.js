'use strict';

let feturedItems = document.querySelectorAll('.fetured__items');
let cartCount = document.getElementsByClassName('cartCount')[0];
let cartIcon = document.querySelector('.cartIcon');
let FeturedInfo = document.querySelectorAll('.fetured__info');
let basketEl = document.querySelector('.basket');
let prodTotal = document.querySelector('.prodTotal');
let productTotal = document.querySelector('.productTotal')

let basket = {}

feturedItems.forEach(function (feturedItem) {
    feturedItem.addEventListener('click', function (event) {
        feturedItemClickHandler(event);
    });
});

function feturedItemClickHandler(event) {
    cartCount.innerHTML = +cartCount.innerText + 1;
    let cartId = event.currentTarget.getAttribute('data-id');
    renderProduct(cartId);
    addProductInObject(cartId);
    totalSum()

}

cartIcon.addEventListener('click', function () {
    cartIconHandler();
});

function cartIconHandler() {
    basketEl.classList.toggle('hidden');
}

function addProductInObject(cartId) {
    if (!(cartId in basket)) {
        basket[cartId] = 1;
    } else {
        basket[cartId]++;
    }
}

function renderProduct(cartId) {
    let productExist = document.querySelector(`.productCount[data-id="${cartId}"]`);
    if (productExist) {
        ProductCount(cartId);
        SumForProduct(cartId);
    } else {
        NewProductInBasket(cartId);
    }
}

function NewProductInBasket(cartId) {
    let newProduct =
        `<div class="basketInfo">
            <div>${products[cartId].name}</div>
            <div>
                <span class="productCount" data-id="${cartId}">1</span> шт.
            </div>
            <div>$${products[cartId].value}</div>
            <div>
                $<span class="productTotal" data-id="${cartId}">${products[cartId].value}</span>
            </div>
        </div>`;

    prodTotal.insertAdjacentHTML("beforebegin", newProduct);
}


function ProductCount(cartId) {
    let productCountEl = document.querySelector(`.productCount[data-id="${cartId}"]`);
    productCountEl.textContent++;
}

function SumForProduct(cartId) {
    let productTotalEl = document.querySelector(`.productTotal[data-id="${cartId}"]`);
    let totalPrice = ((basket[cartId] + 1) * products[cartId].value).toFixed(2);
    productTotalEl.textContent = totalPrice;
}

function totalSum() {
    let totalSum = 0;
    for (let cartId in basket) {
        totalSum += basket[cartId] * products[cartId].value;
    }
    productTotal.textContent = `$${totalSum.toFixed(2)}`;
}