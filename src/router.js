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
      path: "/:newsTitle",
      name: "haber",
      props: true,
      component: () => import("./views/details/MainPageNews.vue")
    },
    //spor
    {
      path: "/kategori/spor",
      name: "spor",
      component: SporCategory
    },
    {
      path: "/:newsTitle",
      name: "spor-details",
      props: true,
      component: () => import("./views/details/SporNews.vue")
    },
    //medya-iletisim
    {
      path: "/kategori/medya-iletisim",
      name: "medya-iletisim",
      component: MedyaIletisimCategory
    },
    {
      path: "/:newsTitle",
      name: "medya-iletisim-details",
      props: true,
      component: () => import("./views/details/MedyaIletisimNews.vue")
    },
    //bilim-teknoloji
    {
      path: "/kategori/bilim-teknoloji",
      name: "bilim-teknoloji",
      component: BilimTeknolojiCategory
    },
    {
      path: "/:newsTitle",
      name: "bilim-teknoloji-details",
      props: true,
      component: () => import("./views/details/BilimTeknolojiNews.vue")
    },
    //kultur-sanat
    {
      path: "/kategori/kultur-sanat",
      name: "kultur-sanat",
      component: KulturSanatCategory
    },
    {
      path: "/:newsTitle",
      name: "kultur-sanat-details",
      props: true,
      component: () => import("./views/details/KulturSanatNews.vue")
    },
    //arastirma-inceleme
    {
      path: "/kategori/arastirma-inceleme",
      name: "arastirma-inceleme",
      component: ArastirmaIncelemeCategory
    },
    {
      path: "/:newsTitle",
      name: "arastirma-inceleme-details",
      props: true,
      component: () => import("./views/details/ArastirmaIncelemeNews.vue")
    },
    //saglik
    {
      path: "/kategori/saglik",
      name: "saglik",
      component: SaglikCategory
    },
    {
      path: "/:newsTitle",
      name: "saglik-details",
      props: true,
      component: () => import("./views/details/SaglikNews.vue")
    },
    //universite
    {
      path: "/kategori/universite",
      name: "universite",
      component: UniversiteCategory
    },
    {
      path: "/:newsTitle",
      name: "universite-details",
      props: true,
      component: () => import("./views/details/UniversiteNews.vue")
    },
    {
      path: "/404/not-found",
      name: "not-found",
      props: true,
      component: () => import("./components/NotFoundComponent.vue")
    },
    //redirect to main page
    {
      path: "*",
      redirect: { name: "anasayfa" }
    }
  ]
});
