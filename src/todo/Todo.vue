<template>
  <div id="todo-container">
    <div class="todo-input">
      <input type="text" autofocus placeholder="接下来做什么">
    </div>
    <TodoItem></TodoItem>
    <TodoTabs></TodoTabs>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
import TodoTabs from './Tabs.vue'
export default {
  components: {
    TodoItem,
    TodoTabs
  }
}
</script>

<style lang="scss" scoped>
#todo-container {
  box-shadow: 0 0 1px 1px #eee;
  width: 600px;
  margin: 0 auto;
  padding: 10px;
}
.todo-input {
  input {
    display: block;
    margin: 0 auto;
    width: 100%;
    height: 50px;
    line-height: 30px;
    padding: 10px;
    font-size: 18px;
    border: 0;
    border-bottom: 1px solid #eee;
    outline: none;
  }
}
</style>
