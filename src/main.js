// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import vueRouter from 'vue-router'
import store from './store'

import App from './App'
import router from './router'
require('@/assets/css/style.css')
require('./utils.js')


Vue.config.productionTip = false
Vue.use(vueRouter);
Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>'
})
