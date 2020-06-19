<template>
    <div class="comment">
        <h3 class="comment__title">{{ title }}</h3>
        <p class="comment__comment">{{ comment }}</p>
    </div>
</template>

<script>

	import { mapState } from 'vuex';

  	export default {
        name: 'comment',
        components: {
        },
        data() {
    		return {

    		}
        },
        computed: {
            ...mapState({
                title: state => state.comment.title,
                comment: state => state.comment.comment
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
    .comment {
        width: 205px;
        height: 264px;
        background: #EDEDED;
        border-radius: 5px;
        padding: 5px;
        font-style: normal;
        font-family: Inter;
        font-weight: normal;
        color: #000000;
    }
    .comment__title {
        margin-top: 0;
        font-size: 18px;
        color: #000000;
        font-weight: 500;
    }
    .comment__comment {
        margin-bottom: 0;
        font-size: 14px;
    }
</style>