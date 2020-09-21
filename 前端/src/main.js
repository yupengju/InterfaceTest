import Vue from 'vue'
import App from './App.vue'
// import router from './routerManuaConfig'
import store from './store'
import router from './router/index'

import './util/promissionRouter'//这里进行路由后台获取的模拟
//全局
import './util/global'
 // Internationalization
import i18n from './lang'

import Cookies from 'js-cookie'

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI, {
    size: Cookies.get('size') || 'medium', // set element-ui default size
    i18n: (key, value) => i18n.t(key, value)
});

import 'font-awesome/css/font-awesome.min.css'



Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
