import Vue from 'vue'
import Router from 'vue-router'
import ToDoList from '@/views/ToDoList.vue'
import ToDoCreate from '@/views/ToDoCreate.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'todo-list',
      component: ToDoList
    },
    {
      path: '/create',
      name: 'todo-create',
      component: ToDoCreate
    }
  ]
})
