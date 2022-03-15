import { getInLocalStorage, setInLocalStorage } from "../persistence/localStorageUtils";

export function checkIfScoreIsInTop10(score) {
    const top10Scores = getInLocalStorage("top10Scores")
    if (!top10Scores || top10Scores.length < 10) {
        return true
    }

    return score > top10Scores[top10Scores.length - 1]
}

export function updateTop10Scores(score) {
    const scoreIsinTop10 = checkIfScoreIsInTop10(score)
    if (scoreIsinTop10) {
        const top10Scores = getInLocalStorage("top10Scores")
        if (top10Scores) {
            if (top10Scores.length >= 10) {
                top10Scores.pop()
            }
            top10Scores.push(score)
            const sorted = top10Scores.sort((a, b) => b - a)
            setInLocalStorage("top10Scores", sorted)
        } else {
            setInLocalStorage("top10Scores", Array.of(score))
        }
    }

    return Promise.resolve()
}