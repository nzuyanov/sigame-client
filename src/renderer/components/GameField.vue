<template>
    <div class="game-field">
        <div class="game-field__up"></div>
        <div class="game-field__down">
            <players-list></players-list>
        </div>
    </div>
</template>

<script>

    import PlayersList from "./PlayersList";

  	export default {
        name: 'game-field',
        components: {
            PlayersList
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