/* eslint-disable no-new */
import Vue from 'vue'

const childComponent = {
  inject: ['grand', 'value'],
  template: `<div>this is child template</div>`,
  mounted () {
    console.log(this.grand, this.value)
  }
}

const component = {
  name: 'father',
  components: {
    child: childComponent
  },
  template: `<child></child>`
}

new Vue({
  name: 'grandF',
  provide () {
    return {
      grand: this,
      value: this.value
    }
  },
  el: '#root',
  components: {
    comp: component
  },
  data: {
    value: 1234
  },
  template: `<comp></comp>`
})
