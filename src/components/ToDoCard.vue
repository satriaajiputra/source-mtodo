<template>
  <div
    class="todo-card"
    :class="{ finished: todo.completed }"
    @click.prevent="opened = !opened"
  >
    <div class="heading">
      <h3 class="title">{{ todo.title }}</h3>
      <span class="date">{{ todo.date }}</span>
      <div class="control">
        <a
          @click.prevent.stop="setCompleted(todo.index)"
          v-if="!todo.completed"
          href="#"
        >&check;</a>
        <a
          @click.prevent.stop="deleteToDo(todo.index)"
          href="#"
        >&times;</a>
      </div>
    </div>
    <div
      class="description"
      v-if="opened"
    >
      <p>
        {{ todo.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: Object
  },
  data() {
    return {
      opened: false
    }
  },
  methods: {
    deleteToDo(index) {
      if (!confirm('Apakah yakin ingin menghapus to do ini?')) return false
      this.$store.dispatch('deleteToDo', index)
    },
    setCompleted(index) {
      if (!confirm('Apakah benar to do ini selesai?')) return false
      this.todo.completed = true
      this.$store.dispatch('setCompleted', index)
    }
  }
}
</script>

<style lang="scss" scoped>
.todo-card {
  user-select: none;
  cursor: pointer;
  border-bottom: 1px solid #ddd;
  overflow: hidden;
  .heading {
    display: flex;
    align-items: center;
    position: relative;
    .title {
      flex-basis: 70%;
      color: #666;
      font-size: 18px;
      margin: 0;
      transition: all 0.1s ease-in-out;
    }
    .date {
      flex-basis: 30%;
      display: inline-block;
      text-align: right;
      color: #1978e4;
    }
    .control {
      position: relative;
      text-align: center;
      width: 100px;
      margin-right: -100%;
      transition: all 0.1s ease-in-out;
      background-color: #1978e4;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px 10px;
      margin-left: 20px;
      a {
        color: #fff;
        display: inline-block;
        border: 1px solid #fff;
        flex-basis: 50%;
        height: 30px;
        font-size: 18px;
        line-height: 30px;
        text-align: center;
        margin: 0 3px;
        &:hover {
          color: #1978e4;
          background: #fff;
        }
      }
    }
  }
  &:hover {
    border-color: #ccc;
  }
  &:hover .control {
    margin-right: 0;
  }
  &:hover .title {
    margin-left: -100px;
  }
  h3.title {
    margin: 0 0 10px 0;
  }
  .description {
    background-color: #f2f2f2;
    padding: 10px;
  }
  &.finished {
    background-color: rgba(#1978e4, 0.1);
  }
}
</style>
