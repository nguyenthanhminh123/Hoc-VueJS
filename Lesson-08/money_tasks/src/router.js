import { createRouter, createWebHashHistory } from "vue-router"

import Home from "./pages/home"

const routes = [
    {
        path: "/",
        component: Home
    },
];

const router = createRouter({
    history: createWebHashHistory(),
});