<template>
    <div class="game-field">
        <div class="game-field__up">
            <div>
                <referee></referee>
                <comment></comment>
            </div>
            <questions></questions>
            <console></console>
        </div>
        <div class="game-field__down">
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
    .game-field__up {
        display: grid;
        grid-template-columns: auto 990px auto;
        justify-content: space-around;
        margin-bottom: var(--gap);
    }
    .game-field__down {
        display: grid;
        grid-template-columns: auto 990px auto;
        justify-content: space-around;
    }
    .plug {
        width: 205px;
    }
</style>
