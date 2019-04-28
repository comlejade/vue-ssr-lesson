import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'

import './assets/styles/global.scss'
import createRouter from './config/router'

import createStore from './store/store'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = createRouter()
const store = createStore()

// 动态注册模块
// store.registerModule('c', {
//   state: {
//     text: 3
//   }
// })

// store.unregisterModule('c')

// store的监听函数
// store.watch(state => state.count + 1, (newCount) => {
//   console.log('new count watched:', newCount)
// })

// store.subscribe((mutations, state) => {
//   console.log(mutations.type, mutations.payload)
// })

// store.subscribeAction((action, state) => {
//   console.log(action.type, action.payload)
// })

router.beforeEach((to, from, next) => {
  console.log('beforeEach invoked')
  next()
  // if (to.fullPath === '/app') {
  //   // next('/login')
  //   next()
  //   // next({ path: '/login' })
  // } else {
  //   next()
  // }
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
  store,
  render: h => h(App)
}).$mount('#root')
