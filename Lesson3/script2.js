function getNumber(min, max){
    let number = parseInt(Math.random()*(max - min) + min);
    if (number === -0) number = 0;
    return number;
}

let basket = [
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
let basketPrice = 0;
for (let prod of basket){
    console.log("Товар " + prod.product + " стоит: " + prod.price + " в количестве: " + prod.qty);
    basketPrice += prod.price *= prod.qty;
}

console.log("Стоимость корзины: " + basketPrice + " у.е.");