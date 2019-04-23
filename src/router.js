import Vue from "vue";
import Router from "vue-router";
import Meta from "vue-meta";
import MainPage from "./views/category/MainPage.vue";
import SporCategory from "./views/category/SporCategory.vue";
import MedyaIletisimCategory from "./views/category/MedyaIletisimCategory.vue";
import BilimTeknolojiCategory from "./views/category/BilimTeknolojiCategory.vue";
import KulturSanatCategory from "./views/category/KulturSanatCategory.vue";
import SaglikCategory from "./views/category/SaglikCategory.vue";
import UniversiteCategory from "./views/category/UniversiteCategory.vue";
import ArastirmaIncelemeCategory from "./views/category/ArastirmaIncelemeCategory.vue";

Vue.use(Router);
Vue.use(Meta);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior: function() {
    return { x: 0, y: 0 };
  },
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
    //medya-iletisim
    {
      path: "/medya-iletisim",
      name: "medya-iletisimpage",
      component: MedyaIletisimCategory
    },
    {
      path: "/medya-iletisim/:newsTitle",
      name: "medya-iletisim",
      props: true,
      component: () => import("./views/details/MedyaIletisimNews.vue")
    },
    //bilim-teknoloji
    {
      path: "/bilim-teknoloji",
      name: "bilim-teknolojipage",
      component: BilimTeknolojiCategory
    },
    {
      path: "/bilim-teknoloji/:newsTitle",
      name: "bilim-teknoloji",
      props: true,
      component: () => import("./views/details/BilimTeknolojiNews.vue")
    },
    //kultur-sanat
    {
      path: "/kultur-sanat",
      name: "kultur-sanatpage",
      component: KulturSanatCategory
    },
    {
      path: "/kultur-sanat/:newsTitle",
      name: "kultur-sanat",
      props: true,
      component: () => import("./views/details/KulturSanatNews.vue")
    },
    //arastirma-inceleme
    {
      path: "/arastirma-inceleme",
      name: "arastirma-incelemepage",
      component: ArastirmaIncelemeCategory
    },
    {
      path: "/arastirma-inceleme/:newsTitle",
      name: "arastirma-inceleme",
      props: true,
      component: () => import("./views/details/ArastirmaIncelemeNews.vue")
    },
    //saglik
    {
      path: "/saglik",
      name: "saglikpage",
      component: SaglikCategory
    },
    {
      path: "/saglik/:newsTitle",
      name: "saglik",
      props: true,
      component: () => import("./views/details/SaglikNews.vue")
    },
    //universite
    {
      path: "/universite",
      name: "universitepage",
      component: UniversiteCategory
    },
    {
      path: "/universite/:newsTitle",
      name: "universite",
      props: true,
      component: () => import("./views/details/UniversiteNews.vue")
    },
    //redirect to main page
    {
      path: "*",
      redirect: { name: "anasayfa" }
    }
  ]
});
