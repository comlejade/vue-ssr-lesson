<template>
  <div id="todo-container">
    <div class="todo-input">
      <input type="text" autofocus placeholder="接下来做什么" @keyup.enter="addItem">
    </div>
    <TodoItem :todo="todo"></TodoItem>
    <TodoTabs></TodoTabs>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
import TodoTabs from './Tabs.vue'
export default {
  data() {
    return {
      todo: {
        id: 0,
        content: 'todo content',
        completed: false
      }
    }
  },
  components: {
    TodoItem,
    TodoTabs
  },
  methods: {
    addItem() {

    }
  },
}
</script>

<style lang="scss" scoped>
#todo-container {
  box-shadow: 0 0 1px 1px #eee;
  width: 600px;
  margin: 0 auto;
}
.todo-input {
  input {
    display: block;
    margin: 0 auto;
    width: 100%;
    height: 50px;
    line-height: 30px;
    padding: 10px 10px 10px 40px;
    font-size: 18px;
    border: 0;
    border-bottom: 1px solid #eee;
    outline: none;
  }
}
</style>
