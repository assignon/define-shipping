import "material-design-icons-iconfont/dist/material-design-icons.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VAnimateCss from "v-animate-css";
import Vuex from "vuex";
import Axios from "axios";
//Aos imports
import AOS from "aos";
import "aos/dist/aos.css";

Axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
Axios.defaults.xsrfCookieName = "XCSRF-TOKEN";
Axios.defaults.withCredentials = true;

Vue.prototype.$axios = Axios;

Vue.config.productionTip = false;
Vue.use(VAnimateCss);
Vue.use(Vuex);

// Vue.prototype.$axios = Axios;

new Vue({
  created() {
    AOS.init();
  },
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
