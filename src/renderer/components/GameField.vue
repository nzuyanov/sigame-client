<template>
    <div class="game-field">
        <div class="game-field__up">
            <console></console>
        </div>
        <div class="game-field__down">
            <players-list></players-list>
        </div>
    </div>
</template>

<script>

    import PlayersList from "./PlayersList";
    import Console from "./Console";

  	export default {
        name: 'game-field',
        components: {
            PlayersList,
            Console
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