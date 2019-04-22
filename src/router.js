import Vue from "vue";
import Router from "vue-router";
import MainPage from "./views/category/MainPage.vue";
import FreshCategory from "./views/category/FreshCategory.vue";
import SporCategory from "./views/category/SporCategory.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    //anasayfa
    {
      path: "/",
      name: "anasayfa",
      component: MainPage
    },
    {
      path: "/haber/:newsTitle",
      name: "haber",
      props: true,
      component: () => import("./views/details/MainPageNews.vue")
    },
    //spor
    {
      path: "/spor",
      name: "sporpage",
      component: SporCategory
    },
    {
      path: "/spor/:newsId/:newsTitle",
      name: "spor",
      props: true,
      component: () => import("./views/details/SporNews.vue")
    },
    {
      path: "/fresh",
      name: "freshpage",
      component: FreshCategory
    },
    {
      path: "/fresh/:newsId/:newsTitle",
      name: "fresh",
      props: true,
      component: () => import("./views/details/FreshNews.vue")
    },
    //redirect to main page
    {
      path: "*",
      redirect: { name: "anasayfa" }
    }
  ]
});
