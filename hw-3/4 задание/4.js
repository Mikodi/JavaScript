'use strict';

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8, price: 78,
    },
];

let ProductPhoto = products.filter(function (photo) {
    if (photo.photos && photo.photos.length > 0) {
        return photo;
    }
});

let ProductValue = products.sort(function (value1, value2) {
    if (value1.price > value2.price) {
        return 1;
    } else if (value1.price < value2.price) {
        return -1;
    } else {
        return 0;
    }
});

console.log(ProductPhoto);
console.log(ProductValue);