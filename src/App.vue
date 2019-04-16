<template>
  <div id="app">
    <todo-header></todo-header>
    <Todo></Todo>
    <todo-footer></todo-footer>
  </div>
</template>

<script>
import Header from './todo/Header.vue'
import Todo from './todo/Todo.vue'
import Footer from './todo/Footer.vue'
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

