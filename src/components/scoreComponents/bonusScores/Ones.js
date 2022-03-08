import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {useBonusContext} from "../../../context/BonusContext";
import {validateDiceContains} from "../../../logic/validation/bonusScoresValidation";
import {calculateDieValueScore} from "../../../logic/calculation/bonusScoresCalculation";
import "../ScoreBox.css"
import "../bonusScores/bonus.css"

export const Ones = () => {
    const {ones, handleSetChosenDiceValue} = useBonusContext()
    const [isAvailable, possibleScore] = useIsScoreAvailableToChoose(ones, handleValidation, handleScoreCalculation)

    return (
        <ScoreBox
            onChosen={() => isAvailable && handleSetChosenDiceValue(1)}
            isAvailable={isAvailable}
            value={ones}
        >
            1-s
            <div>{ones.score}</div>
            <div>{isAvailable && possibleScore}</div>
            <div>
                <DiscardButton value={ones} onClick={() => handleSetChosenDiceValue(1, true)}/>
            </div>
        </ScoreBox>
    );
}

function handleValidation(dice) {
    return validateDiceContains(dice, 1)
}

function handleScoreCalculation(dice) {
    return calculateDieValueScore(dice, 1)
}