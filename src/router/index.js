import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { LocalStorageService } from "../share/storage";

const localStorage = new LocalStorageService();

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

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (localStorage.get("isLogin")) {
//       next();
//       return;
//     }
//     next("/auth/login");
//   } else {
//     next();
//   }
// });

export default router;
