import {mapDiceStateToDiceValueArray} from "./specialScoresCalculation";

export function calculateDieValueScore(dice, value) {
    const diceArray = mapDiceStateToDiceValueArray(dice)
    const numberOfDiceMatchingValue = diceArray.filter(die => die === value)
    return numberOfDiceMatchingValue.length * value
}