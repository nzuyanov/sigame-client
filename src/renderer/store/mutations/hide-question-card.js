export default (state, {tIndex, qIndex}) => {
    state.themes[tIndex].questions[qIndex].done = true;
}