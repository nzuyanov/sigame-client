<template>
    <div class="game-field">
        <div class="game-field__up">
            <!---
            <console></console>
            <comment></comment>
            --->
            <referee></referee>
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

  	export default {
        name: 'game-field',
        components: {
            PlayersList,
            Console,
            Comment,
            Referee,
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