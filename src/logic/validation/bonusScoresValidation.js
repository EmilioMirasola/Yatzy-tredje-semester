import {mapDiceStateToDiceValueArray} from "../calculation/specialScoresCalculation";

export function validateDiceContains(dice, value) {
    const diceArray = mapDiceStateToDiceValueArray(dice)
    return diceArray.includes(value)
}