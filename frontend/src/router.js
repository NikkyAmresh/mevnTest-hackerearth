import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: `/${process.env.VUE_APP_HASH}/`,
    alias: "/posts",
    name: "posts",
    component: () => import("./components/PostsList"),
  },
  {
    path: `/${process.env.VUE_APP_HASH}/posts/:id`,
    name: "post-details",
    component: () => import("./components/Post"),
  },
  {
    path: `/${process.env.VUE_APP_HASH}/add`,
    name: "add",
    component: () => import("./components/AddPost"),
  },
];

const router = createRouter({
  history: createWebHistory(`/${process.env.VUE_APP_HASH}/`),
  routes,
});

export default router;
