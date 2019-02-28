<template>
  <div class="container">
    <h2>List To Do's</h2>
    <div class="todos">
      <transition-group name="fade" mode="out-in">
        <ToDoCard
          v-for="(todo, index) in todos"
          :key="index"
          :todo="{ ...todo, index: index }"
        />
      </transition-group>
    </div>
  </div>
</template>

<script>
import ToDoCard from '@/components/ToDoCard.vue'
import { mapState } from 'vuex'

export default {
  components: {
    ToDoCard
  },
  computed: {
    ...mapState(['todos'])
  }
}
</script>

<style scoped>
h2 {
  font-size: 20px;
  text-align: center;
}
</style>
