<template>
  <div class="container">
    <h2>Create To Do</h2>
    <form @submit.prevent="saveToDo">
      <div class="form-group">
        <label>Title</label>
        <input v-model="todo.title" type="text" />
      </div>
      <div class="form-group">
        <label>Date</label>
        <Datepicker :format="dateFormatter" v-model="todo.date" />
      </div>
      <div class="form-group">
        <label>Description</label>
        <textarea v-model="todo.description" rows="5"></textarea>
      </div>
      <div class="form-group">
        <button type="submit" class="btn">Create</button>
      </div>
    </form>
  </div>
</template>

<script>
import moment from 'moment'
import Datepicker from 'vuejs-datepicker'
export default {
  data() {
    return {
      todo: this.initToDo()
    }
  },
  components: {
    Datepicker
  },
  methods: {
    initToDo() {
      return {
        title: null,
        date: null,
        description: null,
        completed: false
      }
    },
    dateFormatter(date) {
      return moment(date).format('DD MMM YYYY')
    },
    saveToDo() {
      if (!this.todo.title || !this.todo.date || !this.todo.description) {
        alert('Seluruh form harus diisi!')
        return false
      }
      this.todo.date = this.dateFormatter(this.todo.date)
      this.$store.dispatch('saveToDo', this.todo)
      this.$router.push({ name: 'todo-list' })
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  font-size: 20px;
  text-align: center;
}
</style>
