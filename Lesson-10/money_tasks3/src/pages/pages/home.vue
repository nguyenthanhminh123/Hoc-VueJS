<template>
    <h1>Homepage is here</h1>
    <input type="text" v-model="searchText">
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
        let car = reactive({
            price: 100000,
            name: "Mec"
        });

        function onChangeSomething() {
            sencondName.value = {
                name: "Thanh minh",
                something: "Sharing",
            };
            car = {
                price: 200000,
                name: "SOmething",
            };
        }

        return { firstName, sencondName,  onChangeSomething};
    },
};
</script>