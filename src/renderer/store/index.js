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
				state: PLAYER_CARD_STATES.INACTIVE
			}
		],
		comment: {
			title: 'Комментарий ведущего:',
			comment: 'Назвать тайтл вместе сезоном'
		},
		logs: [
			`import asdf Traceback (most recent call last): File "<stdin>", line 1, in <module> ModuleNotFoundError: No module named 'asdf'`,
			`from collections import asdf Traceback (most recent call last): File "<stdin>", line 1, in <module> ImportError: cannot import name 'asdf'`,
			`import asdf Traceback (most recent call last): File "<stdin>", line 1, in <module> ModuleNotFoundError: No module named 'asdf'`,
			`from collections import asdf Traceback (most recent call last): File "<stdin>", line 1, in <module> ImportError: cannot import name 'asdf'`,
			`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus beatae perspiciatis illo maxime delectus labore deleniti illum odio error reprehenderit quae quos praesentium temporibus fugiat nam, mollitia eaque rerum nesciunt.`,
			`import asdf Traceback (most recent call last): File "<stdin>", line 1, in <module> ModuleNotFoundError: No module named 'asdf'`,
			`from collections import asdf Traceback (most recent call last): File "<stdin>", line 1, in <module> ImportError: cannot import name 'asdf'`,
			`import asdf Traceback (most recent call last): File "<stdin>", line 1, in <module> ModuleNotFoundError: No module named 'asdf'`,
			`from collections import asdf Traceback (most recent call last): File "<stdin>", line 1, in <module> ImportError: cannot import name 'asdf'`,
			`import asdf Traceback (most recent call last): File "<stdin>", line 1, in <module> ModuleNotFoundError: No module named 'asdf'`,
			`from collections import asdf Traceback (most recent call last): File "<stdin>", line 1, in <module> ImportError: cannot import name 'asdf'`,
			`import asdf Traceback (most recent call last): File "<stdin>", line 1, in <module> ModuleNotFoundError: No module named 'asdf'`,
			`from collections import asdf Traceback (most recent call last): File "<stdin>", line 1, in <module> ImportError: cannot import name 'asdf'`,
			`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus beatae perspiciatis illo maxime delectus labore deleniti illum odio error reprehenderit quae quos praesentium temporibus fugiat nam, mollitia eaque rerum nesciunt.`,
			`import asdf Traceback (most recent call last): File "<stdin>", line 1, in <module> ModuleNotFoundError: No module named 'asdf'`,
			`from collections import asdf Traceback (most recent call last): File "<stdin>", line 1, in <module> ImportError: cannot import name 'asdf'`,
			`import asdf Traceback (most recent call last): File "<stdin>", line 1, in <module> ModuleNotFoundError: No module named 'asdf'`,
			`from collections import asdf Traceback (most recent call last): File "<stdin>", line 1, in <module> ImportError: cannot import name 'asdf'`,
		]
	},
	modules,
	plugins: [
		createPersistedState(),
		createSharedMutations()
	],
	strict: process.env.NODE_ENV !== 'production'
})
