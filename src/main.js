import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import jQuery from "jquery";
import InfiniteLoading from "vue-infinite-loading";

import "bootstrap";
import "popper.js";
import "./assets/app.scss";

window.$ = window.jQuery = jQuery;
Vue.config.productionTip = false;

Vue.use(InfiniteLoading, {
  /* options */
});
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
