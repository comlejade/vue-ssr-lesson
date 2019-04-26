import Vue from 'vue'

// eslint-disable-next-line no-new
new Vue({
  el: '#root',
  template: `
    <div>
      <div v-pre>Text: {{text}}</div>
      <div v-if="text === 0">else text: </div>
      <div v-else>else content</div>

      <input type="text" v-model="text" />

      <input type="checkbox" v-model="active"/>
      <div>
        <input type="radio" value="one" v-model="picked" />
        <input type="radio" value="two" v-model="picked" />
      </div>
      <div>
        <input type="checkbox" :value="1" v-model="arr" />
        <input type="checkbox" :value="2" v-model="arr" />
        <input type="checkbox" :value="3" v-model="arr" />
      </div>
      <ul>
        <li v-for="(item, index) in arr" :key="item">{{item}} -- {{index}}</li>
      </ul>
    </div>
  `,
  data: {
    text: 0,
    active: false,
    arr: [1, 2, 3],
    picked: ''
  }
})
