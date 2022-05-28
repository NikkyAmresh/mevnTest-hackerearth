import { createWebHistory, createRouter } from "vue-router";

// import * as VueRouter from "vue-router";
// import Vue from "vue";
// Vue.use(VueRouter);

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

// console.log({ test: `/${process.env.REACT_APP_HASH}/` });

// const router = new VueRouter({
//   mode: "history",
//   base: "/dist/",
//   routes,
// });

export default router;
