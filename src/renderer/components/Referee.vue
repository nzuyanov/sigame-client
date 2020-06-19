<template>
    <div class="referee">
        <div class="referee__head">
            <img src="../assets/images/referee.jpg" alt="referee-avatar" class="referee__avatar">
            <h2 class="referee__nickname">{{ nickname }}</h2>
        </div>
        <div class="referee__player" v-if="stateIsPlayer">
            <button class="button referee__appeal-button">Протестую!</button>
        </div>
        <div class="referee__referee" v-show="stateIsReferee && !showScores">
            <div style="width: 100%">
                <div class="referee__answer">
                    <h2 class="referee__answer-title">Правильный ответ</h2>
                    <p class="referee__answer-answer">Узумаки Наруто (1 сезон)</p>
                </div>
                <div class="referee__player-answer">
                    <p class="referee__player-answer-title">Ответ Зритель</p>
                    <div class="referee__player-answer-buttons">
                        <button class="button referee__player-answer-button referee__player-answer-button_right">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0)">
                                    <path d="M29.2408 6.31449C28.1533 5.11298 26.2972 5.02124 25.0957 6.1087L12.1395 17.8391L4.95424 11.0174C3.77852 9.90165 1.92097 9.95025 0.805745 11.1255C-0.30948 12.3007 -0.26138 14.1578 0.913846 15.2735L9.94276 23.8437C10.5105 24.3832 11.2365 24.6505 11.962 24.6505C12.3696 24.6505 12.7767 24.5632 13.155 24.3946C13.5939 24.2796 14.0124 24.0604 14.3724 23.7341L29.0345 10.459C30.2365 9.37156 30.3282 7.516 29.2408 6.31449Z" fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="30" height="30" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                        <button class="button referee__player-answer-button referee__player-answer-button_wrong">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0)">
                                    <path d="M28.8968 23.0814L20.515 14.6984L28.2929 6.92048C29.7644 5.45089 29.7644 3.0672 28.2929 1.59634C26.8227 0.126124 24.439 0.126761 22.97 1.59634L15.1909 9.37424L7.0314 1.21414C5.56055 -0.256082 3.17685 -0.256082 1.70727 1.21414C0.23769 2.68499 0.23769 5.06741 1.70727 6.53827L9.86737 14.6984L1.10339 23.4617C-0.36747 24.9332 -0.36747 27.3156 1.10339 28.7865C2.57361 30.2561 4.95666 30.2561 6.42624 28.7865L15.1909 20.0225L23.5739 28.4056C25.0441 29.8758 27.4272 29.8758 28.8968 28.4056C30.3683 26.9341 30.3676 24.5504 28.8968 23.0814Z" fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="30" height="30" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="referee__buttons">
                <svg class="button" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.21693 0.95232C4.9935 0.95232 6.43387 2.39269 6.43387 4.16925V11.5511C6.57164 11.3939 6.73271 11.2556 6.919 11.1479L22.0892 2.38978C22.6898 2.0429 23.4291 2.0429 24.0297 2.38978C24.6294 2.73616 25 3.37703 25 4.07029V21.5861C25 22.2794 24.6294 22.9202 24.0297 23.2661C23.7294 23.4393 23.3937 23.5266 23.0595 23.5266C22.7247 23.5266 22.3895 23.4393 22.0892 23.2661L6.919 14.508C6.73271 14.4008 6.57164 14.2625 6.43387 14.1053V20.8307C6.43387 22.6073 4.9935 24.0477 3.21693 24.0477C1.44037 24.0477 0 22.6073 0 20.8307V4.16925C0 2.39269 1.44037 0.95232 3.21693 0.95232Z" fill="white"/>
                </svg>
                <svg class="button" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.783 0.952339C20.0064 0.952339 18.566 2.39273 18.566 4.16933V11.5513C18.4277 11.3941 18.2667 11.2558 18.0809 11.1481L2.91087 2.38982C2.31026 2.04295 1.5709 2.04295 0.97029 2.38982C0.370166 2.73622 0 3.37709 0 4.07037V21.586C0 22.2798 0.370166 22.9202 0.97029 23.2671C1.27059 23.4398 1.60631 23.5266 1.94058 23.5266C2.27581 23.5266 2.61056 23.4398 2.91087 23.2671L18.0809 14.5087C18.2667 14.4006 18.4277 14.2623 18.566 14.1051V20.8307C18.566 22.6073 20.0064 24.0477 21.783 24.0477C23.5596 24.0477 25 22.6073 25 20.8307V4.16933C25 2.39273 23.5596 0.952339 21.783 0.952339Z" fill="white"/>
                </svg>
                <svg class="button" @click="handleSettingsClicked" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.98505 5.35694C5.98505 4.28927 5.11951 3.42404 4.05215 3.42404C2.98449 3.42404 2.11925 4.28927 2.11925 5.35694V15.5341H0V17.2047H2.11925V19.6431C2.11925 20.711 2.98449 21.5763 4.05215 21.5763C5.11951 21.5763 5.98505 20.711 5.98505 19.6431V17.2047H8.10431V15.5341H5.98505V5.35694Z" fill="white"/>
                    <path d="M14.4327 5.35694C14.4327 4.28927 13.5671 3.42404 12.4998 3.42404C11.4321 3.42404 10.5669 4.28927 10.5669 5.35694V6.82443H8.44763V8.49435H10.5669V19.6427C10.5669 20.7107 11.4321 21.576 12.4998 21.576C13.5671 21.576 14.4327 20.7107 14.4327 19.6427V8.49467H16.5523V6.82443H14.4327V5.35694Z" fill="white"/>
                    <path d="M25 15.5341H22.8804V5.35694C22.8804 4.28927 22.0148 3.42404 20.9475 3.42404C19.8795 3.42404 19.0146 4.28927 19.0146 5.35694V15.5341H16.895V17.2047H19.0146V19.6431C19.0146 20.711 19.8795 21.5763 20.9475 21.5763C22.0148 21.5763 22.8804 20.711 22.8804 19.6431V17.2047H25V15.5341Z" fill="white"/>
                </svg>
                <svg class="button" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.44771 21.5178C9.44771 23.4409 7.88859 25 5.96555 25C4.04252 25 2.4834 23.4409 2.4834 21.5178V3.48216C2.4834 1.55912 4.04252 0 5.96555 0C7.88859 0 9.44771 1.55912 9.44771 3.48216V21.5178Z" fill="white"/>
                    <path d="M22.5162 21.5178C22.5162 23.4409 20.9571 25 19.034 25C17.111 25 15.5519 23.4409 15.5519 21.5178V3.48216C15.5524 1.55912 17.1115 0 19.034 0C20.9571 0 22.5162 1.55912 22.5162 3.48216V21.5178Z" fill="white"/>
                </svg>
                <svg class="button" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                        <path d="M24.3949 11.449L13.9955 5.44513C13.6204 5.22871 13.1581 5.22871 12.7826 5.44513C12.4071 5.66155 12.1759 6.06309 12.1759 6.49592V11.4245L1.81994 5.44513C1.44404 5.22871 0.982174 5.22871 0.606648 5.44513C0.231122 5.66155 0 6.06309 0 6.49592V18.5041C0 18.9369 0.231122 19.3377 0.606648 19.5541C0.794411 19.6623 1.00366 19.717 1.21292 19.717C1.42217 19.717 1.6318 19.6623 1.81957 19.5541L12.1752 13.5755V18.5041C12.1752 18.9369 12.4059 19.3377 12.7815 19.5541C12.9692 19.6623 13.1792 19.717 13.3881 19.717C13.597 19.717 13.807 19.6623 13.994 19.5541L24.3934 13.5502C24.7689 13.3338 25 12.933 25 12.4994C25.0015 12.0666 24.7704 11.6654 24.3949 11.449Z" fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="25" height="25" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </div>
        <div class="referee__referee" v-show="stateIsReferee && showScores">
            <div class="referee__scores">
                <div class="referee__player-scores" v-for="player in players" :key="player.id">
                    <p class="referee__player-scores-nickname">{{ player.nickname }}</p>
                    <input class="referee__player-scores-input" type="number" :value="player.scores" :ref="`playerScoresInput${player.id}`" @change="handlePlayerScoresChanged(player.id)">
                </div>
            </div>
            <div class="referee__buttons referee__buttons_one">
                <svg class="button" @click="handleSubmitSettingClicked" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                        <path d="M24.3673 5.26207C23.4611 4.26081 21.9143 4.18437 20.9131 5.09058L10.1162 14.8659L4.12852 9.18114C3.14875 8.25138 1.60079 8.29187 0.671434 9.27123C-0.25792 10.2506 -0.217837 11.7981 0.761518 12.7279L8.28561 19.8698C8.75876 20.3193 9.36373 20.5421 9.96828 20.5421C10.308 20.5421 10.6472 20.4693 10.9625 20.3288C11.3282 20.233 11.677 20.0503 11.977 19.7784L24.1954 8.71585C25.197 7.80963 25.2735 6.26333 24.3673 5.26207Z" fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="25" height="25" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>

    import { mapState } from 'vuex';
    import MutationTypes from '../store/mutations/types';
    import REFEREE_STATES from '../../constants/referee-states';

  	export default {
        name: 'referee',
        components: {
        },
        data() {
    		return {
                showScores: true,
    		}
        },
        computed: {
            ...mapState({
                refereeState: state => state.referee.state,
                nickname: state => state.referee.nickname,
                avatar: state => state.referee.avatar,
                players: state => state.players
            }),
            stateIsReferee() {
                return this.refereeState === REFEREE_STATES.REFEREE;
            },
            stateIsPlayer() {
                return this.refereeState === REFEREE_STATES.PLAYER;
            },
        },
		created() {
        },
        mounted() {
        },
    	methods: {
            handleSettingsClicked() {
                this.showScores = true;
            },
            handleSubmitSettingClicked() {
                this.showScores = false;
            },
            handlePlayerScoresChanged(playerId) {
                this.$store.commit(MutationTypes.SET_NEW_PLAYER_SCORES, {
                    playerId,
                    value: this.$refs[`playerScoresInput${playerId}`][0].value
                })
            }
        },
  }
</script>

<style scoped>
    .referee {
        width: 185px;
        height: 380px;
        background: #161A1B;
        border-radius: 5px;
        padding: 10px;
        padding-bottom: 0;
    }
    .referee__head {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }
    .referee__avatar {
        min-width: 80px;
        min-height: 80px;
        width: 80px;
        height: 80px;
        border-radius: 40px;
        overflow: hidden;
        margin-right: 10px;
    }
    .referee__nickname {
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        display: flex;
        color: #FFFFFF;
        margin: 0;
    }
    .referee__appeal-button {
        background: #FFFFFF;
        border-radius: 5px;
        width: 100%;
        height: 34px;
        border: none;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        color: #000000;
    }
    .referee__referee {
        height: calc(100% - 100px);
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
    }
    .referee__buttons {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .referee__buttons_one {
        justify-content: center!important;
    }
    .referee__answer {
        width: calc(100% - 10px);
        min-height: 70px;
        padding: 5px;
        font-family: Inter;
        color: #000000;
        background: #C4C4C4;
        border-radius: 5px;
    }
    .referee__answer-title {
        margin: 0;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
    }
    .referee__answer-answer {
        margin: 0;
        font-style: italic;
        font-weight: normal;
        font-size: 12px;
    }
    .referee__player-answer {
        margin-top: 10px;
    }
    .referee__player-answer-title {
        margin: 0;
        text-align: center;
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        color: #FFFFFF;
    }
    .referee__player-answer-buttons {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 7px;
    }
    .referee__player-answer-button {
        width: 85px;
        height: 60px;
        border-radius: 5px;
        border: none;
        display: flex;
        justify-content: center;
    }
    .referee__player-answer-button_right {
        background: #36A33A;
    }
    .referee__player-answer-button_wrong {
        background: #E15355;
    }
    .referee__scores {
        width: 100%;
    }
    .referee__player-scores {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-top: 10px;    
    }
    .referee__player-scores-nickname {
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        color: #FFFFFF;
        margin: 0;
    }
    .referee__player-scores-input {
        width: 70px;
        height: 20px;
        background: #FFFFFF;
        color: black;
        font-family: Inter;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        text-align: right;
    }
    .referee__player-scores-input:focus {
        outline: none;
    }
</style>