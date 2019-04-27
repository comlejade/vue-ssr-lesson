// 用于拦截处理获取到的数据，相当于 computed
export default {
  fullName (state) {
    return `${state.firstName} ${state.lastName}`
  }
}
