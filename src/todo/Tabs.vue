<template>
  <div class="todo-tabs">
    <div class="count">
      2 items left
    </div>
    <div class="tab-btns" @click="toggleShow">
      <span v-for="item in states" :key="item" :class="[filter === item ? 'active' : '']">
        {{ item }}
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
    }
  },
  data() {
    return {
      states: ['all', 'active', 'completed']
    }
  },
  methods: {
    toggleShow(event) {
      
    },
    clearAllCompleted() {

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
