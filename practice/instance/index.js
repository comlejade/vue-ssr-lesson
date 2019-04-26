import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  data: {
    obj: {}
  },
  template: '<div> this is a content {{ obj.a }}</div>'
})

app.$mount('#root')
app.$set(app.obj, 'a', 111)
