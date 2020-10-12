<template>
    <div class="questions" :style="tableTemplate">
        <template v-for="(theme, i) in themes" v-if="showTable">
            <div class="questions__container questions__container_theme"
                :key="theme.title"
                :class="{
                    'questions__container_tl': i === 0,
                    'questions__container_bl': i === themes.length - 1
                }"
            >{{ theme.title }}</div>
            <div class="questions__container questions__container_question"
                v-for="(q, j) in theme.questions"
                :key="theme.title + q.cost"
                :class="{
                    'questions__container_tr': (i === 0) && (j === theme.questions.length - 1),
                    'questions__container_br': (i === themes.length - 1) && (j === theme.questions.length - 1),
                    'questions__container_done': q.done
                }"
                @click="handleQuestionClicked(i, j)"
            >{{ q.cost }}</div>
        </template>
        <question v-if="!showTable"></question>
    </div>
</template>

<script>

    import { mapState } from 'vuex';
    import MutationsTypes from '../store/mutations/types';
    import Question from './Question';

  	export default {
        name: 'questions',
        components: {
            Question
        },
        data() {
    		return {
    		    showTable: true
    		}
        },
        computed: {
            ...mapState({
                themes: state => state.themes
            }),
            tableTemplate() {
                let res = 'grid-template-columns: auto';
                let questionsNum = this.themes[0].questions.length;
                for (let i = 0; i < questionsNum; i++) {
                    res += ' auto';
                };
                return res;
            }
        },
		created() {
        },
        mounted() {
        },
    	methods: {
            handleQuestionClicked(tIndex, qIndex) {
                this.showTable = false;
                // this.$store.commit(MutationsTypes.HIDE_QUESTION_CARD, {
                //     tIndex,
                //     qIndex
                // })
            }
        },
  }
</script>

<style scoped>
    .questions {
        width: 990px;
        height: 654px;
        border-radius: 5px;
        border: 2px solid #FFFFFF;
        box-sizing: border-box;
        display: grid;
        background: #FFFFFF;
        grid-gap: 2px;
        position: relative;
    }
    .questions__container {
        padding: 5px;
        background: #161A1B;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
        font-style: normal;
        font-style: normal;
    }
    .questions__container_tl {
        border-radius: 5px 0 0 0;
    }
    .questions__container_tr {
        border-radius: 0 5px 0 0;
    }
    .questions__container_br {
        border-radius: 0 0 5px 0;
    }
    .questions__container_bl {
        border-radius: 0 0 0 5px;
    }
    .questions__container_done {
        cursor: default!important;
        background: #161A1B!important;
        color: #161A1B!important;
    }
    .questions__container_theme {
        font-size: 18px;
    }
    .questions__container_question {
        font-size: 36px;
        transition: .2s ease-in-out;
        cursor: pointer;
    }
    .questions__container_question:hover {
        background: #5B5E5F;
    }

    @media screen and (max-width: 1500px) {
        .questions {
            width: 690px;
            height: 454px;
        }
        .questions__container_theme {
            font-size: 14px;
        }
        .questions__container_question {
            font-size: 26px;
        }
    }
</style>
