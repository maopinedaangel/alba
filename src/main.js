// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import vueRouter from 'vue-router'
import store from './store'

import App from './App'
import router from './router'
import axios from 'axios'
//import IconBase from "./components/IconBase.vue"
//import IconPrint from "./components/icons/IconPrint"
require('@/assets/css/style.css')
require('./utils.js')


Vue.config.productionTip = false
Vue.use(vueRouter);
Vue.use(Vuex);
//Vue.component("IconBase", IconBase);
//Vue.component("IconPrint", IconPrint);

const token = localStorage.getItem("user-token");
if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>'
})
