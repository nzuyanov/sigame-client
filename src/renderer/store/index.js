import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations/index'

import { createPersistedState, createSharedMutations } from 'vuex-electron'

import modules from './modules'
import GAME_SCREENS from '../../constants/game-screens'
import COLORS from '../../constants/colors'
import PLAYER_CARD_STATES from '../../constants/player-card-states'
import REFEREE_STATES from '../../constants/referee-states'
import MODALS from '../../constants/modals'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		gameScreen: GAME_SCREENS.GAME,
		playerTurnId: 1,
		referee: {
			state: REFEREE_STATES.REFEREE,
			nickname: 'Господин ведущий',
			avatar: 'referee.jpg'
		},
		players: [
			{
				id: 1,
				nickname: 'Шерпа Esdeath',
				color: COLORS.BLUE,
				avatar: 'pride.jpg',
				scores: 10000,
				cost: 10000,
				state: PLAYER_CARD_STATES.INACTIVE
			},
			{
				id: 2,
				nickname: 'The Last Pride',
				color: COLORS.BLUE,
				avatar: 'pride.jpg',
				scores: 2000,
				cost: 2000,
				state: PLAYER_CARD_STATES.INACTIVE
			},
			{
				id: 3,
				nickname: 'Зритель',
				color: COLORS.BLUE,
				avatar: 'pride.jpg',
				scores: 100,
				cost: 100,
				state: PLAYER_CARD_STATES.INACTIVE
			},
			{
				id: 4,
				nickname: 'Рамзан Кадыров',
				color: COLORS.BLUE,
				avatar: 'pride.jpg',
				scores: 1500,
				cost: 1500,
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
		],
		modal: MODALS.NONE,
		themes: [
			{
				title: 'Аниме',
				questions: [
					{
						cost: 100,
						done: false
					},
					{
						cost: 200,
						done: false
					},
					{
						cost: 300,
						done: false
					},
					{
						cost: 400,
						done: false
					},
					{
						cost: 500,
						done: false
					},
				]	
			},
			{
				title: 'Всратые опенинги',
				questions: [
					{
						cost: 100,
						done: false
					},
					{
						cost: 200,
						done: false
					},
					{
						cost: 300,
						done: false
					},
					{
						cost: 400,
						done: false
					},
					{
						cost: 500,
						done: false
					},
				]	
			},
			{
				title: 'Батины мемы',
				questions: [
					{
						cost: 100,
						done: false
					},
					{
						cost: 200,
						done: false
					},
					{
						cost: 300,
						done: false
					},
					{
						cost: 400,
						done: false
					},
					{
						cost: 500,
						done: false
					},
				]	
			},
			{
				title: 'ВЕРНИ МНЕ МОЙ 2007',
				questions: [
					{
						cost: 100,
						done: false
					},
					{
						cost: 200,
						done: false
					},
					{
						cost: 300,
						done: false
					},
					{
						cost: 400,
						done: false
					},
					{
						cost: 500,
						done: false
					},
				]	
			},
			{
				title: 'ПИВО',
				questions: [
					{
						cost: 100,
						done: false
					},
					{
						cost: 200,
						done: false
					},
					{
						cost: 300,
						done: false
					},
					{
						cost: 400,
						done: false
					},
					{
						cost: 500,
						done: false
					},
				]	
			},
			{
				title: 'ЕЕЕЕЕ РОКЦ',
				questions: [
					{
						cost: 100,
						done: false
					},
					{
						cost: 200,
						done: false
					},
					{
						cost: 300,
						done: false
					},
					{
						cost: 400,
						done: false
					},
					{
						cost: 500,
						done: false
					},
				]	
			},
		]
	},
	mutations,
	modules,
	plugins: [
		//createPersistedState(),
		//createSharedMutations()
	],
	strict: process.env.NODE_ENV !== 'production'
})
