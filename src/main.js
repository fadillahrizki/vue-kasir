import { createApp } from "vue";
import { createMemoryHistory, createRouter } from "vue-router";
import "./style.css";
import App from "./App.vue";
import Home from "./screens/Home.vue";
import Login from "./screens/Login.vue";
import Order from "./screens/Order.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/order", component: Order },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
