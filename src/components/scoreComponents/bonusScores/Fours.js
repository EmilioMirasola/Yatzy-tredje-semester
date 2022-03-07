import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {useBonusContext} from "../../../context/BonusContext";
import {validateDiceContains} from "../../../logic/bonusScoresValidation";
import {calculateDieValueScore} from "../../../logic/bonusScoresCalculation";

export const Fours = () => {
    const {fours, handleSetChosenDiceValue} = useBonusContext()
    const [isAvailable, possibleScore] = useIsScoreAvailableToChoose(fours, handleValidation, handleScoreCalculation)

    return (
        <ScoreBox
            onChosen={() => isAvailable && handleSetChosenDiceValue(4)}
            isAvailable={isAvailable}
            value={fours}
        >
            <div>
                4-s
            </div>
            <div>{fours.score}</div>
            <div>{isAvailable && possibleScore}</div>
            <DiscardButton value={fours} onClick={() => handleSetChosenDiceValue(4, true)}/>
        </ScoreBox>
    );
}

function handleValidation(dice) {
    return validateDiceContains(dice, 4)
}

function handleScoreCalculation(dice) {
    return calculateDieValueScore(dice, 4)
}