import PizzazPageVue from "@/pages/PizzasPage.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: PizzazPageVue,
    },
  ],
});

export default router;
