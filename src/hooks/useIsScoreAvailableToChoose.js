import {useEffect, useState} from "react";

export const useIsScoreAvailableToChoose = (validatorFunction, calculatePossibleScoreFunction, diceStates, hasRolled) => {
    const [isAvailable, setIsAvailable] = useState(true)
    const [possibleScore, setPossibleScore] = useState(hasRolled && calculatePossibleScoreFunction(diceStates))

    useEffect(() => {
        if (hasRolled) {
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