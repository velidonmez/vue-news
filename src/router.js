import Vue from "vue";
import Router from "vue-router";
import PopularCategory from "./views/category/PopularCategory.vue";
import FreshCategory from "./views/category/FreshCategory.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: PopularCategory
    },
    {
      path: "/fresh",
      name: "freshpage",
      component: FreshCategory
    },
    {
      path: "/popular/:newsId/:newsTitle",
      name: "popular",
      props: true,
      component: () => import("./views/details/PopularNews.vue")
    },
    {
      path: "/fresh/:newsId/:newsTitle",
      name: "fresh",
      props: true,
      component: () => import("./views/details/FreshNews.vue")
    },
    {
      path: "*",
      redirect: { name: "home" }
    }
  ]
});
