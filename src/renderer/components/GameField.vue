<template>
    <div class="game-field">
        <div class="game-field__up">
            <!---
            <console></console>
            <comment></comment>
            <referee></referee>
            --->
            <questions></questions>
        </div>
        <div class="game-field__down">
            <!---
            <players-list></players-list>
            --->
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

</style>