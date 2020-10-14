<template>
    <div class="game-field">
        <div class="game-field__board game-field__board_up">
            <referee></referee>
            <questions></questions>
            <console></console>
        </div>
        <div class="game-field__board game-field__board_down">
            <comment></comment>
            <players-list></players-list>
            <game-controls></game-controls>
        </div>
    </div>
</template>

<script>

    import PlayersList from "./PlayersList";
    import Console from "./Console";
    import Comment from "./Comment";
    import Referee from "./Referee";
    import Questions from "./Questions";
    import GameControls from './GameControls';

  	export default {
        name: 'game-field',
        components: {
            PlayersList,
            Console,
            Comment,
            Referee,
            Questions,
            GameControls,
        },
        data() {
    		return {
    		}
          },
		created() {
		},
    	methods: {
        },
  }
</script>

<style scoped>
    .game-field {
        padding: 10px;
        height: calc(100vh - 20px);
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .game-field__board {
        display: grid;
        grid-template-columns: auto 990px auto;
        grid-column-gap: var(--gap);
        justify-content: center;
    }
    .game-field__board_up {
        margin-bottom: var(--gap);
    }
    .game-field__board_down {
    }
    .plug {
        width: 205px;
    }

    @media screen and (max-width: 1500px) {
        .game-field__board {
            grid-template-columns: auto 690px auto;
        }
    }
</style>
