export function mutateDiscard(scoreState) {
    const newState = copyState(scoreState)
    newState.discarded = true
    return newState
}

export function mutateScore(scoreState, score) {
    const newState = copyState(scoreState)
    newState.score = score
    return newState
}

function copyState(state) {
    return {...state}
}