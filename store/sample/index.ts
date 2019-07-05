import { Getters, Mutations, Actions } from 'vuex'
import { S, G, M, A } from './type'

/**
 * state
 */
export const state = (): S => ({
  todos: [
    {
      id: 'a',
    },
    {
      id: 'b',
    },
    {
      id: 'c',
    },
  ],
})

/**
 * getters
 */
export const getters: Getters<S, G> = {
  todosCount(state, getters, rootState, rootgetters) {
    return state.todos.length
  },
  getTodos(state) {
    return state.todos
  },
}

/**
 * mutations
 */
export const mutations: Mutations<S, M> = {
  addTodo(state, payload) {
    state.todos.push(payload.todo)
  },
}
// ______________________________________________________
//
export const actions: Actions<S, A, G, M> = {
  asyncAddTodo({ commit }, payload) {
    commit('addTodo', payload)
  },
}
