<template>
    <div class="game-field">
        <div class="game-field__board game-field__board_up">
            <div>
                <referee></referee>
                <comment></comment>
            </div>
            <questions></questions>
            <console></console>
        </div>
        <div class="game-field__board game-field__board_down">
            <div class="plug"></div>
            <players-list></players-list>
            <div class="plug"></div>
        </div>
    </div>
</template>

<script>

    import PlayersList from "./PlayersList";
    import Console from "./Console";
    import Comment from "./Comment";
    import Referee from "./Referee";
    import Questions from "./Questions";

  	export default {
        name: 'game-field',
        components: {
            PlayersList,
            Console,
            Comment,
            Referee,
            Questions
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
    }
    .game-field__board {
        display: grid;
        grid-template-columns: auto 990px auto;
        grid-column-gap: var(--gap);
        justify-content: space-around;
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
