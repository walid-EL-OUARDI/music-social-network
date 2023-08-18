import "./assets/style.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
const pinia = createPinia();

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(router);

app.mount("#app");
