import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const authRoute = [
  { path: "/auth", redirect: "/auth/login" },
  {
    path: "/auth/:name",
    name: "Auth",
    // route level code-splitting
    // this generates a separate chunk (Auth.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/AuthView.vue"),
  },
  {
    path: "/",
    name: "Home",
    component: HomeView,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...authRoute,
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFound/NotFound.vue"),
    },
  ],
});

export default router;
