import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {useBonusContext} from "../../../context/BonusContext";
import {validateDiceContains} from "../../../logic/validation/bonusScoresValidation";
import {calculateDieValueScore} from "../../../logic/calculation/bonusScoresCalculation";

export const Threes = () => {
    const {threes, handleSetChosenDiceValue} = useBonusContext()
    const [isAvailable, possibleScore] = useIsScoreAvailableToChoose(threes, handleValidation, handleScoreCalculation)

    return (
        <ScoreBox
            onChosen={() => isAvailable && handleSetChosenDiceValue(3)}
            isAvailable={isAvailable}
            value={threes}
        >
            <div>
                3-s
            </div>
            <div>{threes.score}</div>
            <div>{isAvailable && possibleScore}</div>
            <DiscardButton value={threes} onClick={() => handleSetChosenDiceValue(3, true)}/>
        </ScoreBox>
    );
}

function handleValidation(dice) {
    return validateDiceContains(dice, 3)
}

function handleScoreCalculation(dice) {
    return calculateDieValueScore(dice, 3)
}