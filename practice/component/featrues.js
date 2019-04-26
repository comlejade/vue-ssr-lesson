import Vue from 'vue'

const componet = {
  template: `
    <div :style="style">
      <div class="header">
        <slot name="header"></slot>
      </div>
      <div class="body">
        <slot></slot>
      </div>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
    </div>
  `,
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      }
    }
  }
}

// eslint-disable-next-line no-new
new Vue({
  el: '#root',
  components: {
    CompOne: componet
  },
  template: `
    <comp-one>
      <template v-slot:header>
        <span>this is header</span>
      </template>

      <span>hahahhah</span>

      <template v-slot:footer>
        <span>this is footer</span>
      </template>
    </comp-one>
  `
})
