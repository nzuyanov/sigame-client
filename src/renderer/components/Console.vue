<template>
    <div class="console">
        <p class="console__log" v-for="(log, i) in logs" :key="log + i">>>> {{ log }}</p>
    </div>
</template>

<script>

	import { mapState } from 'vuex';

  	export default {
        name: 'console',
        components: {
        },
        data() {
    		return {
    		}
        },
        computed: {
            ...mapState({
				logs: state => state.logs
			}),
        },
		created() {
        },
        mounted() {
        },
    	methods: {
        },
  }
</script>

<style scoped>
    .console {
        width: 195px;
        height: 649px;
        background: #EDEDED;
        border-radius: 5px;
        padding: 5px 5px 0;
        overflow: scroll;
        margin-bottom: 0;
    }
    .console::-webkit-scrollbar {
        width: 0;
    }
    .console__log {
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        color: #000000;
    }
    .console__log:first-of-type {
        margin: 0;
    }

    @media screen and (max-width: 1500px) {
        .console {
            height: 449px;
        }
    }
</style>
