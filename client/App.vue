<template>
  <div id="app">
    <todo-header />
    <p>{{ counter }}</p>
    <p>{{ name }}</p>
    <!-- <router-link to="/app">app</router-link> -->
    <router-link to="/app/123">app123</router-link>
    <router-link to="/app/456">app456</router-link>
    <!-- <router-link :to="{name: 'app'}">app</router-link> -->
    <router-link to="/login">login</router-link>
    <!-- <Todo /> -->
    <router-view></router-view>
    <todo-footer />

    <!-- <router-view name="a"></router-view> -->
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Header from './layout/Header.vue'
// import Todo from './views/todo/Todo.vue'
import Footer from './layout/Footer.vue'
export default {
  components: {
    'todo-header': Header,
    // Todo,
    'todo-footer': Footer
  },
  computed: {
    // 数组，对象，方法等多种用法
    // ...mapState(['count']),
    ...mapState({
      counter: (state) => state.count
    }),
    ...mapGetters({
      name: 'fullName'
    })
    // ...mapGetters(['fullName'])
    // count () {
    //   return this.$store.state.count
    // },
    // fullName () {
    //   return this.$store.getters.fullName
    // }
  },
  mounted () {
    // console.log(this.$route)
    console.log(this.$store)
    let i = 1
    // setInterval(() => {
    this.$store.commit('updateCount', i++)
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
