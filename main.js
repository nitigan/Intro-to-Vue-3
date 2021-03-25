const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants:[
                {id:2234,color:'green'},
                {id:2235,color:'blue'}
            ],
            sizes:[
                {size:'S'},
                {size:'M'},
                {size:'L'},
            ]

        }
    }
})
