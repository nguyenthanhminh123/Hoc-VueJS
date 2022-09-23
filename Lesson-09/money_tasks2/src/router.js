import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./pages/home"
import Transactions from "./pages/transactions";
import TransactionDetails from "./pages/transaction-details";

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/transactions",
        component: Transactions,
    },
    {
        path: "/transactions/:id",
        component: TransactionDetails,
    },
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
});

export default router;