import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./router";

const app = createApp(App);
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

app.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true,
});
app.use(router);
app.mount("#app");
