import Vue from "vue";
import Router from "vue-router";
import Meta from "vue-meta";
import MainPage from "./views/category/MainPage.vue";
import Categories from "./views/category/Categories.vue";
import Hakkimizda from "./views/details/Hakkimizda.vue";

Vue.use(Router);
Vue.use(Meta);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior: function() {
    return {
      x: 0,
      y: 0
    };
  },
  routes: [
    //anasayfa
    {
      path: "/",
      name: "anasayfa",
      component: MainPage
    },
    //kategoriler
    {
      path: "/:category",
      name: "categories",
      component: Categories
    },
    //guncel haber detay
    {
      path: "/:newsTitle",
      name: "haber",
      props: true,
      component: () => import("./views/details/MainPageNews.vue")
    },
    //test hakkımızda
    {
      path: "/info/:menuSlug",
      name: "hakkimizda",
      component: Hakkimizda
    },
    //404 page
    {
      path: "/404/not-found",
      name: "not-found",
      props: true,
      component: () => import("./components/NotFoundComponent.vue")
    },
    //redirect to main page
    {
      path: "*",
      redirect: {
        name: "anasayfa"
      }
    }
  ]
});
