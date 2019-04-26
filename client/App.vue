<template>
  <div id="app">
    <todo-header />
    <router-link to="/app">app</router-link>
    <!-- <router-link :to="{name: 'app'}">app</router-link> -->
    <router-link to="/login">login</router-link>
    <!-- <Todo /> -->
    <router-view></router-view>
    <todo-footer />

    <!-- <router-view name="a"></router-view> -->
  </div>
</template>

<script>
import Header from './layout/Header.vue'
import Todo from './views/todo/Todo.vue'
import Footer from './layout/Footer.vue'
export default {
  components: {
    'todo-header': Header,
    Todo,
    'todo-footer': Footer
  },
  mounted () {
    // console.log(this.$route)
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
