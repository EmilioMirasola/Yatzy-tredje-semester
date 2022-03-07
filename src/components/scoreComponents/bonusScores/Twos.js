import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {useBonusContext} from "../../../context/BonusContext";
import {validateDiceContains} from "../../../logic/bonusScoresValidation";
import {calculateDieValueScore} from "../../../logic/bonusScoresCalculation";

export const Twos = () => {
    const {twos, handleSetChosenDiceValue} = useBonusContext()
    const [isAvailable, possibleScore] = useIsScoreAvailableToChoose(twos, handleValidation, handleScoreCalculation)

    return (
        <ScoreBox
            onChosen={() => isAvailable && handleSetChosenDiceValue(2)}
            isAvailable={isAvailable}
            value={twos}
        >
            <div>2-s</div>
            <div>{twos.score}</div>
            <div>{isAvailable && possibleScore}</div>
            <DiscardButton value={twos} onClick={() => handleSetChosenDiceValue(2, true)}/>
        </ScoreBox>
    );

}

function handleValidation(dice) {
    return validateDiceContains(dice, 2)
}

function handleScoreCalculation(dice) {
    return calculateDieValueScore(dice, 2)
}
