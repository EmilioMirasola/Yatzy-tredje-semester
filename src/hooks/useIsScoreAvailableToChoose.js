import {useEffect, useState} from "react";
import {hasFieldBeenChosenPreviously} from "../logic/specialScoresValidation";
import {useDiceContext} from "../context/DiceContext";

export const useIsScoreAvailableToChoose = (objectToCheck, validatorFunction, calculatePossibleScoreFunction) => {
    const {hasRolled, diceStates} = useDiceContext()
    const [isAvailable, setIsAvailable] = useState(!hasFieldBeenChosenPreviously(objectToCheck) && hasRolled)
    const [possibleScore, setPossibleScore] = useState(!hasFieldBeenChosenPreviously(objectToCheck) && hasRolled && calculatePossibleScoreFunction(diceStates))

    useEffect(() => {
        if (!hasFieldBeenChosenPreviously(objectToCheck) && hasRolled) {
            const valid = validatorFunction(diceStates)
            setIsAvailable(valid)

            if (valid) {
                const possibleScore = calculatePossibleScoreFunction(diceStates)
                setPossibleScore(possibleScore)
            }
        } else {
            setIsAvailable(false)
            setPossibleScore(null)
        }
    }, [diceStates, hasRolled])

    return [isAvailable, possibleScore]
}