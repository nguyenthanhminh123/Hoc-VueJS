<template>
    <h1>Overview page is here</h1>
    <input type="text" v-model="searchText" />
    <ul>
        <li v-for="(customer, index) in customersFilled" :key="index">
        {{customer}}
        </li>
    </ul>
    <p>{{transactions}}</p>
</template>

<script>
    import { computed, ref, reactive, watch, watchEffect } from "vue";
    import useTranSactions from "../uses/fetchTransactions";
    export default {
        props: {
            theme: {
                type: String,
                required: false,
                default: "light",
            },
        },
        setup () {
            const { transactions, fetchAll } = useTranSactions();

            fetchAll();

            const searchText = ref("");
            const customers = reactive([
                "Something",
                "Thanh minh",
                "Sky Oi",
                "Hula",
            ]);
            const customersFilled = computed(()=> {
                customers 
                .map((customer)=> {
                    customer = customer.toLowerCase();
                    return customer;
                })
                .filter((customer) => customer.includes(searchText.value.toLowerCase()))
            });

            watch(searchText, (newValue, oldValue) => {
                console.log(newValue, oldValue)
            });
            watchEffect(() => {
                if (searchText.value) {
                    console.log("run again");
                }
            });

            return { searchText, customersFilled, transactions};
        },
    };
</script>