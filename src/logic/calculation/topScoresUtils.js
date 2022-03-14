import { getInLocalStorage } from "../persistence/localStorageUtils";

export function checkIfScoreIsInTop10(score) {
    const top10Scores = getInLocalStorage("top10Scores")
    return score > top10Scores[top10Scores.length - 1]
}

export function updateTop10Scores(score) {
    const scoreIsinTop10 = checkIfScoreIsInTop10(score)
    if (scoreIsinTop10) {
        const top10Scores = getInLocalStorage("top10Scores")
        top10Scores.findIndex(topScore => topScore < score)
    }
}