/* eslint-disable no-new */
import Vue from 'vue'

const component = {
  props: {
    propOne: String
  },
  template: '<div>{{propOne}}</div>'
}

// Vue.component('CompOne', component)

new Vue({
  el: '#root',
  template: '<comp-one :prop-one="show" ></comp-one>',
  components: {
    CompOne: component
  },
  data: {
    show: 'show'
  }
})
