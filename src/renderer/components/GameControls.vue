<template>
    <div class="game-controls">
        <div class="game-controls__buttons">
            <button class="button game-controls__button">Помощь</button>
            <button class="button game-controls__button">Выход</button>
        </div>
    </div>
</template>

<script>


export default {
    name: 'game-controls',
    components: {
    },
    data() {
        return {
        }
    },
    computed: {
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
    .game-controls {
        width: 205px;
        height: calc(100% - var(--gap));
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
    .game-controls__buttons {
        display: flex;
        justify-content: flex-end;
    }
    .game-controls__button {
        background: none;
        outline: none;
        border: none;
        color: white;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        margin-left: 5px;
    }
    .game-controls__button:first-of-type {
        margin-left: 0;
    }
    .game-controls__button:hover {
    }
</style>
