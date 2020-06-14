import Vue from 'vue'
import Vuex from 'vuex'

import { createPersistedState, createSharedMutations } from 'vuex-electron'

import modules from './modules'
import GAME_SCREENS from '../../constants/game-screens'
import COLORS from '../../constants/colors'
import PLAYER_CARD_STATES from '../../constants/player-card-states'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		gameScreen: GAME_SCREENS.GAME,
		playerTurnId: 1,
		players: [
			{
				id: 1,
				nickname: 'Шерпа Esdeath',
				color: COLORS.BLUE,
				avatar: 'pride.jpg',
				scores: 1000,
				cost: 500,
				state: PLAYER_CARD_STATES.ACTIVE_COST
			}
		]
	},
	modules,
	plugins: [
		createPersistedState(),
		createSharedMutations()
	],
	strict: process.env.NODE_ENV !== 'production'
})
