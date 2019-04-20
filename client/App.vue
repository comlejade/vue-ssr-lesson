<template>
  <div id="app">
    <todo-header />
    <Todo />
    <todo-footer />
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
