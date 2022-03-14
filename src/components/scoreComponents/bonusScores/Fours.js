import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {useBonusContext} from "../../../context/BonusContext";
import {validateDiceContains} from "../../../logic/validation/bonusScoresValidation";
import {calculateDieValueScore} from "../../../logic/calculation/bonusScoresCalculation";
import {mutateDiscard, mutateScore} from "../../../logic/mutation/scoreMutation";

export const Fours = ({onChosen}) => {
    const {fours, setFours} = useBonusContext()
    const [isAvailable, possibleScore] = useIsScoreAvailableToChoose(fours, handleValidation, handleScoreCalculation)

    return (
        <ScoreBox
            onChosen={() => isAvailable && onChosen(possibleScore)}
            isAvailable={isAvailable}
            value={fours}
        >
            <div>
                4-s
            </div>
            <div>{fours.score}</div>
            <div>{isAvailable && possibleScore}</div>
            <DiscardButton value={fours} onClick={handleDiscard}/>
        </ScoreBox>
    );

    function handleDiscard() {
        const newState = mutateDiscard(fours)
        setFours(newState)
    }
}

function handleValidation(dice) {
    return validateDiceContains(dice, 4)
}

function handleScoreCalculation(dice) {
    return calculateDieValueScore(dice, 4)
}