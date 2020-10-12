<template>
    <div class="player-card" :style="backgroundStyle">
        <div class="player-card__wrapper">
            <div class="player-card__about" v-show="showAbout">
                <div class="player-card__avatar-wrapper">
                    <img class="player-card__avatar" src="../assets/images/pride.jpg" alt="player-avatar" :style="`border-color: ${color}`">
                </div>
                <p class="player-card__nickname">{{ nickname }}</p>
            </div>
            <p class="player-card__scores" v-show="showScores">{{ scores }}<span class="player-card__cost">/{{ cost }}</span></p>
            <div class="player-card__dialog-title" v-show="showDialogTitle">{{ dialogTitle }}</div>
            <p class="player-card__apellation-message">{{ apellationMessage }}</p>
            <div class="player-card__buttons-group" v-show="stateIsAppelation">
                <button class="button player-card__apellation-button">Пересмотреть</button>
                <button class="button player-card__apellation-button">Оставить</button>
            </div>
            <textarea class="player-card__text-input" v-show="stateIsTextInput"></textarea>
            <button class="button player-card__input-ready-button" v-show="stateIsTextInput">Готов</button>
            <div class="player-card__bet-amount" v-show="stateIsBet">
                <div style="width: 150px">
                    <vue-slide-bar
                        :show-tooltip="true"
                        :paddingless="true"
                        :speed="0.2"
                        :min="betMin"
                        :max="betMax"
                        :processStyle="processStyle"
                        :lineHeight="10"
                        v-model="betValue"
                    >
                        <template slot="tooltip">
                            <div class="tooltip"></div>
                        </template>
                    </vue-slide-bar>
                    <div class="player-card__slider-labels">
                        <div class="player-card__slider-label">{{ betMin }}</div>
                        <div class="player-card__slider-label">{{ betMax }}</div>
                    </div>
                </div>
                <input class="player-card__bet-input" type="number"
                    :min="betMin"
                    :max="betMax"
                    v-model="betValue"
                    >
            </div>
            <div class="player-card__bet-buttons-group" v-show="stateIsBet">
                <button class="button player-card__bet-button">Пас</button>
                <button class="button player-card__bet-button">Номинал</button>
                <button class="button player-card__bet-button">Ва-банк!</button>
            </div>
        </div>
        <div class="player-card__timer" v-show="showTimer"></div>
    </div>
</template>

<script>

	import { mapState } from 'vuex';
    import STATES from '../../constants/player-card-states'
    import VueSlideBar from 'vue-slide-bar'

  	export default {
        name: 'player-card',
        props: {
            player: Object
        },
        components: {
            VueSlideBar
        },
        data() {
    		return {
                betValue: 0,
                processStyle: {
                    backgroundColor: 'white'
                },
    		}
        },
        computed: {
            ...mapState({
				playerTurnId: state => state.playerTurnId
			}),
            id() {
                return this.player.id;
            },
            nickname() {
                return this.player.nickname;
            },
            color() {
                return this.player.color;
            },
            avatar() {
                return this.player.avatar;
            },
            avatarSrc() {
                return `imgs/${this.avatar}`;
            },
            scores() {
                return this.player.scores;
            },
            cost() {
                return this.player.cost;
            },
            myTurn() {
                return this.playerTurnId === this.id;
            },
            stateIsInactive() {
                return this.player.state === STATES.INACTIVE;
            },
            stateIsActive() {
                return this.player.state === STATES.ACTIVE;
            },
            stateIsActiveCost() {
                return this.player.state === STATES.ACTIVE_COST;
            },
            stateIsTimer() {
                return this.player.state === STATES.TIMER;
            },
            stateIsBet() {
                return this.player.state === STATES.BET;
            },
            stateIsTextInput() {
                return this.player.state === STATES.TEXT_INPUT;
            },
            stateIsAppelation() {
                return this.player.state === STATES.APPELATION;
            },
            backgroundStyle() {
                return (!this.stateIsInactive) ? `background-color: ${this.color}` : ``;
            },
            showAbout() {
                return !this.stateIsBet && !this.stateIsTextInput && !this.stateIsAppelation;
            },
            showTimer() {
                return this.stateIsActiveCost || this.stateIsBet || this.stateIsTextInput;
            },
            showDialogTitle() {
                return this.stateIsBet || this.stateIsTextInput || this.stateIsAppelation;
            },
            showScores() {
                return this.showAbout;
            },
            dialogTitle() {
                if (this.stateIsBet) return 'Ваша ставка';
                if (this.stateIsTextInput) return 'Ваш ответ';
                if (this.stateIsAppelation) return 'Апелляция';
                return '';
            },
            apellationMessage() {
                if (!this.stateIsAppelation) return '';
                return 'Игрок Зритель считает, что результат последнего ответа следует пересмотреть';
            },
            betMin() {
                return 0;
            },
            betMax() {
                return this.scores;
            }
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
    .player-card {
        position: relative;
        overflow: hidden;
        width: 220px;
        height: 145px;
        background: #161A1B;
        border-radius: 5px;
        padding: 10px;
        transition: .2s linear;
        margin-bottom: var(--gap);
    }
    .player-card__avatar-wrapper {
        height: 80px;
        width: 80px;
        margin-right: 10px;
    }
    .player-card__avatar {
        height: 80px;
        width: 80px;
        overflow: hidden;
        border-radius: 40px;
        border: 4px solid;
        box-sizing: border-box;
        object-fit: cover;
    }
    .player-card__about {
        display: flex;
        align-items: center;
    }
    .player-card__nickname {
        cursor: default;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        color: white;
    }
    .player-card__scores {
        cursor: default;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        color: white;
        margin: 0;
        text-align: right;
    }
    .player-card__wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .player-card__cost {
        font-size: 18px;
    }
    .player-card__timer {
        width: 100%;
        height: 10px;
        background: white;
        position: absolute;
        left: 0;
        bottom: 0;
    }
    .player-card__dialog-title {
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        color: #FFFFFF;
    }
    .player-card__apellation-message {
        margin: 0;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        color: #FFFFFF;
    }
    .player-card__bet-buttons-group {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .player-card__apellation-button {
        background: #FFFFFF;
        border-radius: 5px;
        color: #262C2F;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        border: none;
        width: 105px;
        height: 40px;
        cursor: pointer;
    }
    .player-card__input-ready-button {
        background: #FFFFFF;
        border-radius: 5px;
        color: #262C2F;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        border: none;
        cursor: pointer;
        width: 70px;
        height: 25px;
        margin-left: auto;
        margin-bottom: 10px;
    }
    .player-card__text-input {
        width: 216px;
        height: 70px;
        resize: none;
        overflow: auto;
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        color: #262C2F;
        border: none;
    }
    .player-card__text-input:focus {
        outline: none;
    }
    .player-card__text-input::-webkit-scrollbar {
        display: none;
    }
    .player-card__bet-button {
        background: #FFFFFF;
        border-radius: 5px;
        color: #262C2F;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        border: none;
        cursor: pointer;
        width: 70px;
        height: 40px;
        margin-bottom: 10px;
    }
    .player-card__bet-amount {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }
    .player-card__bet-input {
        outline: none;
        border: none;
        width: 60px;
        height: 20px;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        color: #262C2F;
        text-align: center;
    }
    .player-card__bet-input::-webkit-outer-spin-button,
    .player-card__bet-input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    .player-card__slider-labels {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 7px;
    }
    .player-card__slider-label {
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        color: #FFFFFF;
    }
    .tooltip {
        width: 8px;
        height: 17px;
        left: 59px;
        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        border-radius: 2px;
        top: 24px;
        left: 7px;
        position: absolute;
    }


    @media screen and (max-width: 1500px) {
        .player-card {
            width: 150px;
        }
    }
</style>
