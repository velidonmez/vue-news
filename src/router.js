import Vue from "vue";
import Router from "vue-router";
import FrontPage from "./views/FrontPage.vue";
import Fresh from "./views/Fresh.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: FrontPage
    },
    {
      path: "/fresh",
      name: "fresh",
      component: Fresh
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/news/:newsId",
      name: "news",
      props: true,
      component: () => import("./views/NewsDetails.vue")
    },
    {
      path: "*",
      redirect: { name: "home" }
    }
  ]
});
