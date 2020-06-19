export default (state, payload) => {
    let playerObj = state.players.find(p => p.id === payload.playerId);
    if (!playerObj) {
        console.error('Unexisting player id', payload.playerId);
    } else {
        playerObj.scores = Number(payload.value);
    
    }
}