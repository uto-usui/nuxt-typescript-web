import { Getters, Mutations, Actions } from 'vuex'
import { S, G, M, A } from './type'

/**
 * state
 */
export const state = (): S => ({
  isPageReady: false,
  isMenuOpen: false,
  pageName: '',
  window: {
    w: 0,
    h: 0,
  },
  scrollY: 0,
})

/**
 * getters
 */
export const getters: Getters<S, G> = {
  // getIsMenuOpen(state, getters, rootState, rootgetters) {
  //   return state.isMenuOpen
  // },
}

/**
 * mutations
 */
export const mutations: Mutations<S, M> = {
  isPageReady(state, payload) {
    state.isPageReady = payload
  },
  isMenuOpen(state, payload) {
    state.isMenuOpen = payload
  },
  pageName(state, payload) {
    state.pageName = payload
  },
  window(state, payload) {
    state.window = payload
  },
  scrollY(state, payload) {
    state.scrollY = payload
  },
}

/**
 * actions
 */
export const actions: Actions<S, A, G, M> = {
  setIsPageReady({ commit }, payload) {
    commit('isPageReady', payload)
  },
  setIsMenuOpen({ commit }, payload) {
    commit('isMenuOpen', payload)
  },
  setPageName({ commit }, payload) {
    commit('pageName', payload)
  },
  setWindow({ commit }, payload) {
    commit('window', payload)
  },
  setScrollY({ commit }, payload) {
    commit('scrollY', payload)
  },
}
