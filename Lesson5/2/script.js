const cartItem = {
    render(good) {
        return  `<div class="good">
        <div>Наименование: ${good.product__name}</div>
        <div>Цена за единицу: ${good.price}</div>
        <div>Количество: ${good.qty}</div>
        <div>Стоимость: ${good.qty * good.price}</div>
    </div>`
    }
}

const cart = {
    cartListBlock: null,
    cartButton: 3,
    cartItem,
    goods: [
        {
            id__product: 999,
            product__name: 'Телевизор',
            price: 45000,
            qty: 2
        },
        {
            id__product: 998,
            product__name: 'Чайник',
            price: 5000,
            qty: 5
        },
        // {
        //     id__product: 997,
        //     product__name: 'Телефон',
        //     price: 50000,
        //     qty: 3
        // },
        {
            id__product: 996,
            product__name: 'Приставка',
            price: 40000,
            qty: 1
        },
        {
            id__product: 995,
            product__name: 'Джостик',
            price: 4000,
            qty: 2
        },
    ],
    init() {
        this.cartListBlock = document.querySelector('.cart-list');
        this.cartButton = document.querySelector('.cart-btn');
        this.cartButton.addEventListener('click', this.clearCart.bind(this));
        
        this.render()
    },
    render() {
        if (this.goods.length) {
            this.goods.forEach(good => {
                this.cartListBlock.insertAdjacentHTML('beforeend', this.cartItem.render(good));
            });
            this.cartListBlock.insertAdjacentHTML('beforeend', `В корзине ${this.goods.length} товаров стоимостью ${this.getCartPrice()}`);
        } else {
            this.cartListBlock.innerHTML = 'Корзина пуста';
        }
    },
    getCartPrice() {
        return this.goods.reduce(function (price, good) {
            return price + good.price * good.qty;
        }, 0)
    },
    clearCart() {
        this.goods = [];
        this.render();
    }
}
cart.init()

