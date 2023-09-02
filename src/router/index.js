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
                {
                  path: "stack",
                  component: () => import("../views/AlPage/AlPageOneTwo.vue"),
                },
                {
                  path: "queue",
                  component: () => import("../views/AlPage/AlPageOneThree.vue"),
                },
                {
                  path: "linkedlist",
                  component: () => import("../views/AlPage/AlPageOneFour.vue"),
                },
                {
                  path: "set",
                  component: () => import("../views/AlPage/AlPageOneFive.vue"),
                },
                {
                  path: "map",
                  component: () => import("../views/AlPage/AlPageOneSix.vue"),
                },
                {
                  path: "dictionary",
                  component: () => import("../views/AlPage/AlPageOneSeven.vue"),
                },
                {
                  path: "tree",
                  component: () => import("../views/AlPage/AlPageOneEight.vue"),
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
