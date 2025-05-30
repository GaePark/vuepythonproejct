import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import piniaPlugin from "pinia-plugin-persistedstate";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPlugin);
app.use(pinia);
// app.use(Router)
app.use(router);
app.mount("#app");
