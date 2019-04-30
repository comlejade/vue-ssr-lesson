<template>
  <div id="app">
    <todo-header />
    <!-- <p>{{ counter }}</p>
    <p>{{ name }}</p> -->

    <!-- <p>modulesA: {{ textA }}</p>
    <p>modulesB: {{ textB }} {{ textPlus }}</p>
    <p>modulesC: {{ textC }}</p> -->
    <router-link to="/app">app</router-link>
    <!-- <router-link to="/app/123">app123</router-link>
    <router-link to="/app/456">app456</router-link> -->
    <!-- <router-link :to="{name: 'app'}">app</router-link> -->
    <router-link to="/login">login</router-link>
    <!-- <Todo /> -->
    <router-view></router-view>
    <todo-footer />
    <!-- <router-view name="a"></router-view> -->
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import Header from './layout/Header.vue'
// import Todo from './views/todo/Todo.vue'
import Footer from './layout/Footer.vue'
export default {
  metaInfo: {
    title: 'vue ssr app'
  },
  components: {
    'todo-header': Header,
    // Todo,
    'todo-footer': Footer
  },
  computed: {
    // textA () {
    //   return this.$store.state.a.text
    // },
    // 数组，对象，方法等多种用法
    // ...mapState(['count']),
    ...mapState({
      counter: (state) => state.count
      // textA: state => state.a.text,
      // textB: state => state.b.text,
      // textC: state => state.c.text
    }),
    ...mapGetters({
      name: 'fullName'
      // textPlus: 'b/textPlus'
    })
    // ...mapGetters(['fullName'])
    // count () {
    //   return this.$store.state.count
    // },
    // fullName () {
    //   return this.$store.getters.fullName
    // }
  },
  methods: {
    ...mapMutations(['updateCount']),
    ...mapActions(['updateCountAsync'])
    // ...mapMutations(['updateCount', 'a/updateText', 'b/updateText']),
    // ...mapActions(['updateCountAsync', 'b/textAction'])
  },
  mounted () {
    // console.log(this.$route)
    // console.log(this.$store)
    // let i = 1
    // this.$store.dispatch('updateCountAsync', {
    //   num: 5,
    //   time: 2000
    // })
    this.updateCountAsync({
      num: 5,
      time: 2000
    })
    // this['a/updateText']('789')
    // 开启了命名空间
    // this['b/updateText']('012')

    // this['b/textAction']()
    // setInterval(() => {
    // this.$store.commit('updateCount', {
    //   num: ++i,
    //   num2: 3
    // })

    // this.$store.state.count = 3
    // }, 2000)
  }
}
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
}
</style>
