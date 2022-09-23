import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/styles/global.css";
import "./assets/styles/tailwind.css";

createApp(App).use(router).mount("#app");
