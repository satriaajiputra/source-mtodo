import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        title: 'Membuat Single Page App',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos animi veritatis beatae magnam molestias. Ullam fugit sint ducimus laudantium ipsam ipsum aliquam. Est, fugit tenetur! Qui ipsum maxime in ullam!',
        date: '20 Feb 2019',
        completed: false
      },
      {
        id: 2,
        title: 'Membuat Schedule Permainan',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos animi veritatis beatae magnam molestias. Ullam fugit sint ducimus laudantium ipsam ipsum aliquam. Est, fugit tenetur! Qui ipsum maxime in ullam!',
        date: '25 Feb 2019',
        completed: false
      },
      {
        id: 3,
        title: 'Managing Server',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos animi veritatis beatae magnam molestias. Ullam fugit sint ducimus laudantium ipsam ipsum aliquam. Est, fugit tenetur! Qui ipsum maxime in ullam!',
        date: '28 Feb 2019',
        completed: false
      }
    ]
  },
  mutations: {
    SET_TODO(state, todo) {
      let max = -9999
      state.todos.forEach(row => {
        if (row.id > max) max = row.id
      })
      max += 1

      state.todos.push({
        ...todo,
        id: max
      })
    },
    SET_TODO_COMPLETED(state, index) {
      state.todos[index].completed = true
    },
    DELETE_TODO(state, index) {
      state.todos.splice(index, 1)
    }
  },
  actions: {
    saveToDo({ commit }, todo) {
      commit('SET_TODO', todo)
    },
    setCompleted({ commit }, index) {
      commit('SET_TODO_COMPLETED', index)
    },
    deleteToDo({ commit }, index) {
      commit('DELETE_TODO', index)
    }
  }
})
