let app = new Vue({
    el: '#app',
    data: {
        maximum: 50,
        product: null,
        cart: [],
        style : {
            label : ['font-weight-bold', 'mr-2']
        }
    },
    mounted: function() {
        fetch('https://hplussport.com/api/products/order/price')
            .then(response => response.json())
            .then(data => {
                this.product = data;
            });
    },
    methods: {
        addItem: function(product) {
            this.cart.push(product);
        }
    }
});