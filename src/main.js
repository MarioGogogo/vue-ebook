// @ts-nocheck
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入图标
import "./assets/iconfont/iconfont.css";
//引入字体
import "./assets/fonts/font.css";
import "./assets/global.scss";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
