import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { createRouter, createWebHistory } from "vue-router";
import vfmPlugin from "vue-final-modal";

const routes = [
  { path: "/", component: App },
  { path: "/projects/:name", component: App },
];
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

const app = createApp(App);
app.use(router);
app.use(vfmPlugin);

app.mount("#app");
