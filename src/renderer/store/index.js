import Vue from 'vue'
import Vuex from 'vuex'

import { createPersistedState, createSharedMutations } from 'vuex-electron'

import modules from './modules'
import GAME_SCREENS from '../../constants/game-screens'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gameScreen: GAME_SCREENS.LOADING
  },
  modules,
  plugins: [
    createPersistedState(),
    createSharedMutations()
  ],
  strict: process.env.NODE_ENV !== 'production'
})
