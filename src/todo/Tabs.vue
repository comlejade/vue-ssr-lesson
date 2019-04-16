<template>
  <div class="todo-tabs">
    <div class="count">
      2 items left
    </div>
    <div class="tab-btns" @click="toggleShow">
      <button type="button" class="active">all</button>
      <button type="button">active</button>
      <button type="button">completed</button>
    </div>
    <div class="clear">
      clear completed
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleShow(event) {
      
    }
  },
}
</script>


<style lang="scss" scoped>
.todo-tabs {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.count,
.clear {
  font-size: 14px;
  color: #43494c;
  padding: 10px;
}

.tab-btns {
  button {
    padding: 10px;
    font-size: 14px;
    color: #43494c;
    cursor: pointer;
    background-color: #fff;
    margin: 0 5px;
    border: 0;
    outline: none;
    &.active {
      border: 1px solid #b9b4b4;
      border-radius: 8px;
    }
  }
}
</style>
