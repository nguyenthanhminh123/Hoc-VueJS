// Ví dụ 1
// const app = Vue.createApp({
//     data() {
//         return {
//             x: 0,
//             y: 0,
//         };
//     },
//     methods: {
//         onLogEvent(event, newX, newY) {
//             console.log("running event...", event);
//             this.x = newX;
//             this.y = newY;
//         },
//         onMouseMoveEvent(event) {
//             console.log("running mouse move event...", event);
//             this.x = event.offsetX;
//             this.y = event.offsetY;
//         }
//     },
// });

// app.mount("#contact");

const app = Vue.createApp({
    data() {
        return {
            classTesting: "flex",
            products: [
                {
                    thumb: "./assets/p1.jpeg",
                    name: "Sản phẩm A",
                    price: 100,
                    isCart: false,
                },
                {
                    thumb: "./assets/p2.jpeg",
                    name: "Sản phẩm B",
                    price: 150,
                    isCart: false,
                },
                {
                    thumb: "./assets/p3.jpeg",
                    name: "Sản phẩm C",
                    price: 200,
                    isCart: true,
                },
            ],
        };
    },
    methods: {
      onToggleCart(event, product) {
        product.isCart = !product.isCart;
      },
    },
    computed: {
        productsComputed() {
            return this.products.filter(product => product.price < 160);
        },
    },
});

app.mount("#contact");

