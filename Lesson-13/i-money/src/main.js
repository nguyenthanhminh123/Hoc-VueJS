import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/styles/global.css";
import "./assets/styles/tailwind.css";

import { registerGlobalComponents } from "./utils/import"

const app = createApp(App);

registerGlobalComponents(app)

app.use(router);

app.mount("#app");