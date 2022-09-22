<template>
    <h1>Homepage is here</h1>
    <p> {{ firstname }} </p>
    <p>{{car}}</p>
    <button @click="onchangeSomething">Click me</button>
</template>

<script> 
import {ref} from "vue";
export default {
    setup () {
        const firstName = ref ("Sky Albert")
        const sencondName = ref ({
            name: "Quan",
            something: "Minh"
        })
        const car = reactive({
            price: 100000,
            name: "Mec"
        })

        function onChangeSomething() {
            console.log("running heree...");
            console.log(sencondName);
            car.price = 200000;
            sencondName.value.name = "Hihi"
            firstName.value= "Thanh Minh";
            console.log(car);
        }

        return { firstName, onChangeSomething};
    },
};
</script>