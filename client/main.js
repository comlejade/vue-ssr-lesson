import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import './assets/styles/global.scss'
import createRouter from './config/router'

Vue.use(VueRouter)

const router = createRouter()

new Vue({
  router,
  render: h => h(App)
}).$mount('#root')
