<template>
  <div id="todo-container">
    <div class="todo-input">
      <input type="text" autofocus placeholder="接下来做什么" @keyup.enter="addItem">
    </div>
    <TodoItem v-for="todo in filterTodos" :todo="todo" :key="todo.id" @deleteTodo="del"></TodoItem>
    <TodoTabs :filter="filter" :todos="todos" @toggle="toggleFilter" @clearAll="clearAllCompleted"></TodoTabs>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
import TodoTabs from './Tabs.vue'
export default {
  metaInfo: {
    title: 'todo page'
  },
  beforeRouteEnter (to, from, next) {
    console.log('todo before enter')
    next(vm => {
      // console.log('after enter vm.id is', vm.id)
    })
  },
  beforeRouteUpdate (to, from, next) {
    // 使用params路由才会被触发，比如监听 /app/:id，监听id参数的改变
    // console.log('todo before update', 'to.params.id: ', to.params.id)
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('todo before leave')
    next()
  },
  data () {
    return {
      count: 0,
      todos: [],
      filter: 'all'
    }
  },
  props: ['id'],
  mounted () {
    console.log('todo mounted')
  },
  computed: {
    filterTodos () {
      if (this.filter === 'all') {
        return this.todos
      } else if (this.filter === 'active') {
        return this.todos.filter(item => !item.completed)
      } else if (this.filter === 'completed') {
        return this.todos.filter(item => item.completed)
      }
    }
  },
  components: {
    TodoItem,
    TodoTabs
  },
  methods: {
    addItem (e) {
      this.todos.unshift({
        id: this.count++,
        content: e.target.value.trim(),
        completed: false
      })

      e.target.value = ''
    },
    del (id) {
      const index = this.todos.findIndex(item => {
        return item.id === id
      })
      this.todos.splice(index, 1)
    },
    toggleFilter (state) {
      this.filter = state
    },
    clearAllCompleted () {
      this.todos = this.todos.filter(item => !item.completed)
    }
  }
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
