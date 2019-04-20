<template>
  <div :class="['todo-item', todo.completed ? 'completed' : '']">
    <div class="todo-cnt">
      <label>
        <input type="checkbox" v-model="todo.completed">
        <span>{{ todo.content }}</span>
      </label>
    </div>
    <i class="todo-del" @click="deleteItem"></i>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  data () {
    return {

    }
  },
  methods: {
    deleteItem () {
      this.$emit('deleteTodo', this.todo.id)
    }
  }
}
</script>

<style lang="scss" scoped>

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  border-bottom: 1px solid #eee;
  padding-left: 30px;
  padding-right: 10px;

  &:hover {
    .todo-del {
      display: block;
    }
  }

  .todo-cnt {
    display: flex;
    align-items: center;

    label {
      position: relative;
      cursor: pointer;
      &:before {
        position: absolute;
        left: -18px;
        top: 50%;
        transform: translateY(-50%);
        content: '';
        display: block;
        width: 20px;
        height: 20px;
        background: url('../../assets/images/checkbox-non.png') center center no-repeat;
        background-size: 100% 100%;
      }
    }
    input[type=checkbox] {
      display: none;
    }
    span {
      margin-left: 10px;
    }
  }

  &.completed {
    .todo-cnt{
      label{
        &:before {
          background-image: url('../../assets/images/checkbox-checked.png');
        }
      }
    }

  }

  .todo-del {
    display: none;
    width: 12px;
    height: 12px;
    background: url('../../assets/images/del.png') center center no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
  }
}
</style>
