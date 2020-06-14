<template>
    <div class="players-list">
        <player-card 
            v-for="player in players"
            :key="player.id"
            :player="player"       
        ></player-card>
    </div>
</template>

<script>

	import { mapState } from 'vuex';
    import PlayerCard from "./PlayerCard";

  	export default {
        name: 'players-list',
        components: {
            PlayerCard
        },
        data() {
    		return {
    		}
          },
		created() {
        },
        computed: {
            ...mapState({
				players: state => state.players
			}),
        },
    	methods: {
        },
  }
</script>

<style scoped>

</style>