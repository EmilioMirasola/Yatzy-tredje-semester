import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {useBonusContext} from "../../../context/BonusContext";
import {validateDiceContains} from "../../../logic/validation/bonusScoresValidation";
import {calculateDieValueScore} from "../../../logic/calculation/bonusScoresCalculation";
import {mutateDiscard, mutateScore} from "../../../logic/mutation/scoreMutation";

export const Threes = () => {
    const {threes, setThrees} = useBonusContext()
    const [isAvailable, possibleScore] = useIsScoreAvailableToChoose(threes, handleValidation, handleScoreCalculation)

    return (
        <ScoreBox
            onChosen={() => isAvailable && handleSetThrees()}
            isAvailable={isAvailable}
            value={threes}
        >
            <div>
                3-s
            </div>
            <div>{threes.score}</div>
            <div>{isAvailable && possibleScore}</div>
            <DiscardButton value={threes} onClick={handleDiscard}/>
        </ScoreBox>
    );

    function handleSetThrees() {
        const newState = mutateScore(threes, possibleScore)
        setThrees(newState)
    }

    function handleDiscard() {
        const newState = mutateDiscard(threes)
        setThrees(newState)
    }
}

function handleValidation(dice) {
    return validateDiceContains(dice, 3)
}

function handleScoreCalculation(dice) {
    return calculateDieValueScore(dice, 3)
}