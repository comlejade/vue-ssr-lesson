<template>
  <div class="todo-tabs">
    <div class="count">
      {{ unFinishedLength }} items left
    </div>
    <div class="tab-btns">
      <span v-for="state in states" :key="state" @click="toggleFilter(state)" :class="[filter === state ? 'active' : '']">
        {{ state }}
      </span>
    </div>
    <div class="clear" @click="clearAllCompleted">
      clear completed
    </div>
  </div>
</template>

<script>
export default {
  props: {
    filter: {
      type: String,
      required: true
    },
    todos: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      states: ['all', 'active', 'completed']
    }
  },
  computed: {
    unFinishedLength () {
      return  this.todos.filter(item => item.completed === false).length
    }
  },
  methods: {
    toggleFilter(state) {
      this.$emit('toggle', state)
    },
    clearAllCompleted() {
      this.$emit('clearAll')
    }
  },
}
</script>


<style lang="scss" scoped>
.todo-tabs {
  margin-top: 20px;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
}

.count,
.clear {
  font-size: 14px;
  color: #43494c;
  padding: 10px;
}

.clear {
  cursor: pointer;
}

.tab-btns {
  display: flex;
  span {
    padding: 10px;
    display: block;
    font-size: 14px;
    color: #43494c;
    cursor: pointer;
    background-color: #fff;
    margin: 0 5px;
    &.active {
      border: 1px solid #b9b4b4;
      border-radius: 8px;
    }
  }
}
</style>
