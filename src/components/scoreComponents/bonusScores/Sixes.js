import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {useBonusContext} from "../../../context/BonusContext";
import {validateDiceContains} from "../../../logic/validation/bonusScoresValidation";
import {calculateDieValueScore} from "../../../logic/calculation/bonusScoresCalculation";

export const Sixes = () => {
    const {sixes, handleSetChosenDiceValue} = useBonusContext()
    const [isAvailable, possibleScore] = useIsScoreAvailableToChoose(sixes, handleValidation, handleScoreCalculation)

    return (
        <ScoreBox
            onChosen={() => isAvailable && handleSetChosenDiceValue(6)}
            value={sixes}
            isAvailable={isAvailable}
        >
            <div>6-s</div>
            <div>{sixes.score}</div>
            <div>{isAvailable && possibleScore}</div>
            <DiscardButton value={sixes}
                           onClick={() => handleSetChosenDiceValue(6, true)}/>
        </ScoreBox>
    );
}

function handleValidation(dice) {
    return validateDiceContains(dice, 6)
}

function handleScoreCalculation(dice) {
    return calculateDieValueScore(dice, 6)
}