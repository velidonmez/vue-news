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
import YasamCategory from "./views/category/YasamCategory.vue";
import Hakkimizda from "./views/details/Hakkimizda.vue";
//import Arama from "./views/details/Arama.vue";

Vue.use(Router);
Vue.use(Meta);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior: function() {
    return { x: 0, y: 0 };
  },
  routes: [
    //arama
/*     {
      path: "/arama",
      name: "arama",
      component: Arama
    }, */
    //hakkımızda
    {
      path: "/info/:menuSlug",
      name: "hakkimizda",
      component: Hakkimizda
    },
    //anasayfa
    {
      path: "/",
      name: "anasayfa",
      component: MainPage
    },
    //spor
    {
      path: "/spor",
      name: "spor",
      component: SporCategory
    },
    //yasam
    {
      path: "/yasam",
      name: "yasam",
      component: YasamCategory
    },
    //medya-iletisim
    {
      path: "/medya-iletisim",
      name: "medya-iletisim",
      component: MedyaIletisimCategory
    },
    //bilim-teknoloji
    {
      path: "/bilim-teknoloji",
      name: "bilim-teknoloji",
      component: BilimTeknolojiCategory
    },
    //kultur-sanat
    {
      path: "/kultur-sanat",
      name: "kultur-sanat",
      component: KulturSanatCategory
    },
    //arastirma-inceleme
    {
      path: "/arastirma-inceleme",
      name: "arastirma-inceleme",
      component: ArastirmaIncelemeCategory
    },
    //universite
    {
      path: "/universite",
      name: "universite",
      component: UniversiteCategory
    },
    //saglik
    {
      path: "/saglik",
      name: "saglik",
      component: SaglikCategory
    },
    //guncel haber detay
    {
      path: "/:newsTitle",
      name: "haber",
      props: true,
      component: () => import("./views/details/MainPageNews.vue")
    },
    //spor haber detay
    {
      path: "/:newsTitle",
      name: "spor-details",
      props: true,
      component: () => import("./views/details/SporNews.vue")
    },
    //yasam haber detay
    {
      path: "/:newsTitle",
      name: "yasam-details",
      props: true,
      component: () => import("./views/details/YasamNews.vue")
    },
    //medya iletisim haber detay
    {
      path: "/:newsTitle",
      name: "medya-iletisim-details",
      props: true,
      component: () => import("./views/details/MedyaIletisimNews.vue")
    },
    //bilim teknoloji haber detay
    {
      path: "/:newsTitle",
      name: "bilim-teknoloji-details",
      props: true,
      component: () => import("./views/details/BilimTeknolojiNews.vue")
    },
    //kültür sanat haber detay
    {
      path: "/:newsTitle",
      name: "kultur-sanat-details",
      props: true,
      component: () => import("./views/details/KulturSanatNews.vue")
    },
    //arastirma inceleme haber detay
    {
      path: "/:newsTitle",
      name: "arastirma-inceleme-details",
      props: true,
      component: () => import("./views/details/ArastirmaIncelemeNews.vue")
    },
    //sağlık haber detay
    {
      path: "/:newsTitle",
      name: "saglik-details",
      props: true,
      component: () => import("./views/details/SaglikNews.vue")
    },
    //universite haber detay
    {
      path: "/:newsTitle",
      name: "universite-details",
      props: true,
      component: () => import("./views/details/UniversiteNews.vue")
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
      redirect: { name: "anasayfa" }
    }
  ]
});
