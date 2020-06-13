<template>
	<div id="app">
    	<!---<router-view></router-view>--->
		<welcome-screen v-if="screenIsWelcome"></welcome-screen>
		<loading v-if="screenIsLoading"></loading>
		<div v-if="screenIsGame">game</div>
  	</div>
</template>

<script>
	import { mapState } from 'vuex';
	import WelcomeScreen from "./components/WelcomeScreen";
	import Loading from "./components/Loading"
	import GAME_SCREENS from "../constants/game-screens";

	export default {
		name: 'sigame',
		components: {
			WelcomeScreen,
			Loading
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