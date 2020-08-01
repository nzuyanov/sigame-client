<template>
    <div class="question">
        <div class="question__body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus eu justo feugiat facilisis vel ac
            magna. Duis consequat auctor tortor, non lobortis erat vulputate eget. Nulla facilisi. Nam vehicula nibh
            libero, vitae tincidunt lacus tempus eu. Vivamus nibh massa, posuere sit amet ultricies sit amet, ultricies
            pharetra lorem. Phasellus at eros mattis, semper quam non, blandit augue. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Nam fringilla et mauris non luctus. Etiam maximus odio
            eget felis placerat, sed pulvinar lacus sollicitudin. Aenean vulputate quam id enim vulputate, quis volutpat
            dui porta. Curabitur porttitor vel arcu vel cursus.
        </div>
        <div class="question__timer" :style="timerStyle"></div>
    </div>
</template>

<script>

    import { mapState } from 'vuex';

    export default {
        name: 'question',
        components: {
        },
        data() {
            return {
                time: 5,// в секундах
                timerStyle: ''
            }
        },
        computed: {
            ...mapState({
            }),
        },
        created() {
        },
        mounted() {
            console.log('start timer');
            this.timerStyle = `animation: collapsing linear ${this.time}s`;
            setTimeout(() => {
                console.log('over')
            }, this.time * 1000);
        },
        methods: {
        },
    }
</script>

<style>
    @keyframes collapsing {
        from {
            width: 100%;
        }
        to {
            width: 0;
        }
    }

    .question {
        position: absolute;
        height: calc(100% - 80px);
        width: calc(100% - 80px);
        background: #161A1B;
        color: white;
        padding: 40px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .question__body {
        font-size: 18px;
    }
    .question__timer {
        width: 0;
        height: 30px;
        background: linear-gradient(268.11deg, #C52A99 0%, #4E54D6 100%);

    }
</style>
