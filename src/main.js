import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import feather from "vue-icon";
import "@/assets/styles/estilos.styl";

Vue.config.productionTip = false;
Vue.use(feather, "v-icon");

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
