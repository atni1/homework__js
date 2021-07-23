const basket = [
    {
        brand: 'Air jordan',
        model: '1 low',
        price: 11990,
        qty: 1
    },
    {
        brand: 'Air jordan',
        model: '1 high bread',
        price: 33000,
        qty: 1
    },
    {
        brand: 'Air jordan',
        model: '1 high david',
        price: 9790,
        qty: 1
    },
    {
        brand: 'Air jordan',
        model: '1 high travis',
        price: 15790,
        qty: 1
    },
    {
        brand: 'Air jordan',
        model: '5',
        price: 17990,
        qty: 1
    }]

    function getTolalPrice(basket) {
        let tolalBasketPrice = 0
        for (const prod of basket) {
            tolalBasketPrice += prod.price *= prod.qty
        }
        return tolalBasketPrice
    }
    
    console.log('Total spent on sneaker: ' + getTolalPrice(basket) + '₽')