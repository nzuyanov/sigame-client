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
        width: 205px;
        height: 654px;
        background: #EDEDED;
        border-radius: 5px;
        padding-top: 5px;
        padding-left: 5px;
        padding-right: 5px;
        padding-bottom: 0;
        overflow: scroll;
        margin-top: 10px;
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
</style>