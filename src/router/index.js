import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../views/Layout.vue"),
      children: [
        {
          path: "",
          component: () => import("../views/HomePage.vue"),
        },
        {
          path: "about",
          component: () => import("../views/AboutPage.vue"),
        },
        {
          path: "al",
          component: () => import("../views/AlPageLayout.vue"),
          children: [
            {
              path: "",
              component: () => import("../views/AlPage/AlPageOne.vue"),
              children: [
                {
                  path: "",
                  component: () => import("../views/AlPage/AlPageOneOne.vue"),
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;
