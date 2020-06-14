<template>
    <div class="player-card" :style="backgroundStyle">
        <div class="player-card__wrapper">
            <div class="player-card__about" v-show="showAbout">
                <img class="player-card__avatar" src="../assets/images/pride.jpg" alt="player-avatar" :style="`border-color: ${color}`">
                <p class="player-card__nickname">{{ nickname }}</p>
            </div>
            <p class="player-card__scores">{{ scores }}<span class="player-card__cost">/{{ cost }}</span></p>
        </div>
        <div class="player-card__timer" v-show="showTimer"></div>
    </div>
</template>

<script>

	import { mapState } from 'vuex';
    import STATES from '../../constants/player-card-states'

  	export default {
        name: 'player-card',
        props: {
            player: Object
        },
        data() {
    		return {
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
                return (this.stateIsActive) ? `background-color: ${this.color}` : ``;
            },
            showAbout() {
                return !this.stateIsBet && !this.stateIsTextInput && !this.stateIsAppelation;
            },
            showTimer() {
                return this.stateIsActiveCost || this.stateIsBet || this.stateIsTextInput;
            }
        },
		created() {
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
    }
    .player-card__avatar {
        width: 80px;
        height: 80px;
        overflow: hidden;
        border-radius: 40px;
        border: 4px solid;
        box-sizing: border-box;
        margin-right: 10px;
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

</style>