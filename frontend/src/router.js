import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    alias: "/posts",
    name: "posts",
    component: () => import("./components/PostsList"),
  },
  {
    path: "/posts/:id",
    name: "post-details",
    component: () => import("./components/Post"),
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddPost"),
  },
];

const router = createRouter({
  history: createWebHistory(`/${process.env.REACT_APP_HASH}/`),
  routes,
});

export default router;
