<template>
  <div>
    <ul class="todo-list">
      <li class="todo-item">
        <div class="todo-cnt">
          <label>
            <input type="checkbox" name="" id="">
          </label>
          <span>adajlga</span>
        </div>
        <i class="todo-del"></i>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.todo-list {
  list-style-type: none;
}
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  border-bottom: 1px solid #eee;
  .todo-cnt {
    display: flex;
    align-items: center;
    label {
      display: block;
      width: 20px;
      height: 20px;
      background: url('../assets/images/checkbox-non.png') center center no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
      &.checked {
        background-image: url('../assets/images/checkbox-checked.png');
      }
    }
    input[type=checkbox]{
      display: none;
    }
    span {
      margin-left: 10px;
    }
  }

  .todo-del {
    width: 20px;
    height: 20px;
    display: block;
    background: url('../assets/images/del.png') center center no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
  }
}
</style>
