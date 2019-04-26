/* eslint-disable no-new */
import Vue from 'vue'

const component = {
  model: {
    prop: 'val',
    event: 'change'
  },
  props: ['val'],
  template: `
    <div>
      <input type="text" @input="handleInput" :value="val"/>
    </div>
  `,
  methods: {
    handleInput (e) {
      this.$emit('change', e.target.value)
    }
  }
}

new Vue({
  el: '#root',
  components: {
    CompOne: component
  },
  data: {
    value: 1234
  },
  // template: `<comp-one :value="value" @input="value = arguments[0]" ></comp-one>`
  template: `<comp-one v-model="value"></comp-one>`
})
