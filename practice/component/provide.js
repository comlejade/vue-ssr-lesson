/* eslint-disable no-new */
import Vue from 'vue'

const childComponent = {
  inject: ['grand', 'data'],
  template: `<div>this is child template {{data.value}}</div>`,
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
    const data = {}

    Object.defineProperty(data, 'value', {
      get: () => this.value,
      enumerable: true
    })
    return {
      grand: this,
      data
    }
  },
  el: '#root',
  components: {
    comp: component
  },
  data: {
    value: 1234
  },
  template: `
    <div>
      <comp></comp>
      <input type="text" v-model="value"/>
    </div>
  `
})
