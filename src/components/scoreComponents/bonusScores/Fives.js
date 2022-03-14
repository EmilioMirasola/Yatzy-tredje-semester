import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {useBonusContext} from "../../../context/BonusContext";
import {validateDiceContains} from "../../../logic/validation/bonusScoresValidation";
import {calculateDieValueScore} from "../../../logic/calculation/bonusScoresCalculation";
import {mutateDiscard, mutateScore} from "../../../logic/mutation/scoreMutation";

export const Fives = ({onChosen}) => {
    const {fives, setFives} = useBonusContext()
    const [isAvailable, possibleScore] = useIsScoreAvailableToChoose(fives, handleValidation, handleScoreCalculation)

    return (
        <ScoreBox
            onChosen={() => isAvailable && onChosen(possibleScore)}
            isAvailable={isAvailable}
            value={fives}
        >
            <div>
                5-s
            </div>
            <div>{fives.score}</div>
            <div>{isAvailable && possibleScore}</div>
            <DiscardButton value={fives} onClick={handleDiscard}/>
        </ScoreBox>
    );

    function handleDiscard() {
        const newState = mutateDiscard(fives)
        setFives(newState)
    }
}

function handleValidation(dice) {
    return validateDiceContains(dice, 5)
}

function handleScoreCalculation(dice) {
    return calculateDieValueScore(dice, 5)
}