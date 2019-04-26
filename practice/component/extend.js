import Vue from 'vue'

const component = {
  props: {
    active: Boolean,
    propOne: {
      required: true
    }
  },
  template: `
    <div>
      <input type="text" v-model="text"/>
      <span @click="handleChange">{{propOne}}</span>
      <span v-show="active">see me if active</span>
    </div>
  `,
  data () {
    return {
      text: 0
    }
  },
  methods: {
    handleChange () {
      this.$emit('change')
    }
  },
  mounted () {
    console.log('component mounted')
  }
}

const component2 = {
  extends: component,
  data () {
    return {
      text: 1
    }
  },
  mounted () {
    console.log(this.$parent.$options.name)
  }
}

// eslint-disable-next-line no-unused-vars
const CompVue = Vue.extend(component)

// eslint-disable-next-line no-new
new Vue({
  name: 'Root',
  el: '#root',
  components: {
    Comp: component2
  },
  template: `<comp propOne="222"></comp>`
})

// eslint-disable-next-line no-new
// new CompVue({
//   el: '#root',
//   propsData: {
//     propOne: 'xxx'
//   },
//   mounted () {
//     console.log('instance mounted')
//   }
// })
