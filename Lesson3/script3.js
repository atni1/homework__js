let cart = [
    {
        product: "телевизор",
        price: getNumber(50, 100),
        qty: getNumber(1, 5)
    },
    {
        product: "холодильник",
        price: getNumber(50, 100),
        qty: getNumber(1, 5)
    },
    {
        product: "телефон",
        price: getNumber(50, 100),
        qty: getNumber(1, 5)
    },
    {
        product: "камера",
        price: getNumber(50, 100),
        qty: getNumber(1, 5)
    }
];

function countBasketPrice(cart) {
    let fuCountBasketPrice = 0 
    for (let prod of cart) {
        fuCountBasketPrice += prod.price *= prod.qty
    }
    return fuCountBasketPrice;
}

console.log('Стоимость корзины: ' + countBasketPrice(cart) + ' y.e.');
