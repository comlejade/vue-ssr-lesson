import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import './assets/styles/global.scss'
import createRouter from './config/router'

Vue.use(VueRouter)

const router = createRouter()

router.beforeEach((to, from, next) => {
  console.log('beforeEach invoked')
  if (to.fullPath === '/app') {
    // next('/login')
    next('/login')
    // next({ path: '/login' })
  } else {
    next()
  }
})

router.beforeResolve((to, from, next) => {
  console.log('before resolve invoked')
  next()
})

router.afterEach((to, from) => {
  console.log('after each invoked')
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#root')
