// @ts-nocheck
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
// 引入图标
import "./assets/iconfont/iconfont.css";
// 引入全局样式
import "./assets/styles/global.scss";
//引入字体
import "./assets/fonts/Arial.css";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
