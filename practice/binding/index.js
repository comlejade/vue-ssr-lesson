/* eslint-disable no-new */
import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div v-html="html">
      {{html}}
    </div>
  `,
  data: {
    isActive: false,
    arr: [1, 2, 3],
    html: '<span>123</span>'
  }
})
