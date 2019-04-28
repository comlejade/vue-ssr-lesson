import Vuex from 'vuex'
import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

const isDev = process.env.NODE_ENV === 'development'

// 开启热更新
export default () => {
  const store = new Vuex.Store({
    strict: isDev, // 用于开发环境规范代码，不允许外部直接修改state
    state: defaultState,
    mutations,
    getters,
    actions
    // 自定义vuex插件
    // plugins: [
    //   (store) => {
    //     console.log('my plugin invoked')
    //   }
    // ]
  })

  if (module.hot) {
    module.hot.accept([
      './state/state',
      './mutations/mutations',
      './getters/getters',
      './actions/actions'
    ], () => {
      const newState = require('./state/state').default
      const newMutations = require('./mutations/mutations').default
      const newGetters = require('./getters/getters').default
      const newActions = require('./actions/actions').default

      store.hotUpdate({
        state: newState,
        mutations: newMutations,
        getters: newGetters,
        actions: newActions
      })
    })
  }

  return store
}
// export default () => {
//   return new Vuex.Store({
//     strict: isDev, // 用于开发环境规范代码，不允许外部直接修改state
//     state: defaultState,
//     mutations,
//     getters,
//     actions
// modules: {
//   a: {
//     namespaced: true,
//     state: {
//       text: 123
//     },
//     mutations: {
//       updateText (state, text) {
//         state.text = text
//       }
//     }
//   },
//   b: {
//     namespaced: true,
//     state: {
//       text: 456
//     },
//     mutations: {
//       updateText (state, text) {
//         state.text = text
//       }
//     },
//     getters: {
//       textPlus (state, getters, rootState) {
//         return state.text + rootState.count + rootState.a.text
//       }
//     },
//     actions: {
//       textAction ({ commit }) {
//         commit('a/updateText', 'test textAction', { root: true })
//       }
//     }
//   }
// }
//   })
// }
