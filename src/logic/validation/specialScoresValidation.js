import {
    findLargestOfSameValue,
    findPairs,
    mapDiceStateToDiceValueArray,
    mapDicesToCount
} from "../calculation/specialScoresCalculation";

export function canSetScore(objToCheck, hasRolled) {
    return hasRolled && objToCheck.discarded !== true && objToCheck.score === 0
}

export function hasFieldBeenChosenPreviously(objToCheck) {
    if (objToCheck.discarded) {
        return true;
    } else return objToCheck.score !== 0;
}

export function validateOnePair(dice) {
    return findPairs(dice).length > 0
}

export function validateTwoPairs(dice) {
    return findPairs(dice).length >= 2
}

export function validateNumberOfSameValues(dice, minimumNumberOfSame) {
    return findLargestOfSameValue(dice, minimumNumberOfSame) !== null
}

export function validateFullHouse(dice) {
    const countMap = mapDicesToCount(dice)
    if (countMap.size === 2) {
        const counts = Array.from(countMap.values())
        return counts.includes(2) && counts.includes(3)

    }
    return false
}

export function validateSmallStraight(dice) {
    const values = [1, 2, 3, 4, 5]
    return values.every(value => dice.includes(value))
}

export function validateLargeStraight(dice) {
    const values = [2, 3, 4, 5, 6]
    return values.every(value => dice.includes(value))
}

export function validateYatzy(dice) {
    const mapped = mapDiceStateToDiceValueArray(dice)
    return new Set(mapped).size === 1;
}