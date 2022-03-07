import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {useBonusContext} from "../../../context/BonusContext";
import {validateDiceContains} from "../../../logic/bonusScoresValidation";
import {calculateDieValueScore} from "../../../logic/bonusScoresCalculation";

export const Fives = () => {
    const {fives, handleSetChosenDiceValue} = useBonusContext()
    const [isAvailable, possibleScore] = useIsScoreAvailableToChoose(fives, handleValidation, handleScoreCalculation)

    return (
        <ScoreBox
            onChosen={() => isAvailable && handleSetChosenDiceValue(5)}
            isAvailable={isAvailable}
            value={fives}
        >
            <div>
                5-s
            </div>
            <div>{fives.score}</div>
            <div>{isAvailable && possibleScore}</div>
            <DiscardButton value={fives} onClick={() => handleSetChosenDiceValue(5, true)}/>
        </ScoreBox>
    );
}

function handleValidation(dice) {
    return validateDiceContains(dice, 5)
}

function handleScoreCalculation(dice) {
    return calculateDieValueScore(dice, 5)
}