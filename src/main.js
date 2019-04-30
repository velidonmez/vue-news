import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import InfiniteLoading from "vue-infinite-loading";
import VueTimeago from "vue-timeago";
import { VLazyImagePlugin } from "v-lazy-image";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/main.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

Vue.use(VLazyImagePlugin);
Vue.use(VueTimeago, {
  name: "Timeago", // Component name, `Timeago` by default
  locale: "tr", // Default locale
  // We use `date-fns` under the hood
  // So you can use all locales from it
  locales: {
    tr: require("date-fns/locale/tr")
  }
});

Vue.use(InfiniteLoading, {
  /* options */
});
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
