<template>
    <div class="modal" v-show="!hide">
        <div class="modal__exit" v-show="showExit">
            <h2 class="modal__title">Вы действительно хотите выйти?</h2>
            <div class="modal__buttons">
                <button class="button modal__button modal__button_primary">Да</button>
                <button class="button modal__button modal__button_secondary">Нет</button>
            </div>
        </div>
        <div class="modal__pause" v-show="showPause">
            <h2 class="modal__title">Игра на паузе</h2>
            <div class="modal__buttons">
                <button class="button modal__button modal__button_primary">Продолжить</button>
                <button class="button modal__button modal__button_secondary">Выход</button>
            </div>
        </div>
        <div class="modal__help" v-show="showHelp">
            <div class="modal__credits">
			    <p class="credits__text">[F11] — полноэкранный режим</p>
			    <h3 class="credits__subtitle">Ведущий</h3>
			    <p class="credits__text">[P] — пауза/продолжить</p>
			    <p class="credits__text">[S] — суммы игроков</p>
			    <p class="credits__text">[SPACE] — пропустить таймер</p>
			    <p class="credits__text">[LEFT] — предыдущий раунд</p>
			    <p class="credits__text">[RIGHT] — следующий раунд</p>
		  	    <h3 class="credits__subtitle">Игрок</h3>
		  	    <p class="credits__text">
			    <p class="credits__text">[SPACE] — дать ответ</p>
			    <p class="credits__text">[Q] — апелляция</p>
            </div>
            <div class="modal__buttons">
                <button class="button modal__button modal__button_primary">Продолжить</button>
                <button class="button modal__button modal__button_secondary">Выход</button>
            </div>
        </div>
    </div>
</template>

<script>

    import { mapState } from 'vuex';
    import MODALS from '../../constants/modals';

  	export default {
        name: 'modal',
        components: {
        },
        data() {
    		return {
    		}
        },
        computed: {
            ...mapState({
                modal: state => state.modal
            }),
            hide() {
                return this.modal === MODALS.NONE;
            },
            showPause() {
                return this.modal === MODALS.PAUSE;
            },
            showHelp() {
                return this.modal === MODALS.HELP;
            },
            showExit() {
                return this.modal === MODALS.EXIT;
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
    .modal {
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .modal__title {
        font-style: normal;
        font-weight: normal;
        font-size: 48px;
        text-align: center;
        color: #FFFFFF;
        margin: 0;
    }
    .modal__exit {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .modal__buttons {
        margin-top: 150px;
    }
    .modal__button {
        width: 300px;
        height: 80px;
        border-radius: 5px;
        border: none;
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        margin-right: 60px;
    }
    .modal__button:last-of-type {
        margin-right: 0;
    }
    .modal__button_primary {
        background: #39B1B1;
        color: white;
    }
    .modal__button_secondary {
        background: #FFFFFF;
        color: black;
    }
    .modal__credits {
        color: white;
        font-family: Inter;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: default;
        user-select: none;
        text-align: center;
    }
</style>