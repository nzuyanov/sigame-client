<template>
	<div id="app">
		<welcome-screen v-if="screenIsWelcome"></welcome-screen>
		<game-field v-if=screenIsGame></game-field>
		<loading v-if="screenIsLoading"></loading>
  	</div>
</template>

<script>
	import { mapState } from 'vuex';
	import WelcomeScreen from "./components/WelcomeScreen";
	import Loading from "./components/Loading";
	import GameField from "./components/GameField";
	import GAME_SCREENS from "../constants/game-screens";

	export default {
		name: 'sigame',
		components: {
			WelcomeScreen,
			Loading,
			GameField
		},
		computed: {
			...mapState({
				gameScreen: state => state.gameScreen
			}),
			screenIsWelcome() {
				return this.gameScreen === GAME_SCREENS.WELCOME;
			},
			screenIsLoading() {
				return this.gameScreen === GAME_SCREENS.LOADING;
			},
			screenIsGame() {
				return this.gameScreen === GAME_SCREENS.GAME;
			}
		}
	}
</script>