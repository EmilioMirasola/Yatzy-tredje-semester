import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {useBonusContext} from "../../../context/BonusContext";
import {validateDiceContains} from "../../../logic/validation/bonusScoresValidation";
import {calculateDieValueScore} from "../../../logic/calculation/bonusScoresCalculation";
import "../ScoreBox.css"
import "../bonusScores/bonus.css"
import {mutateDiscard, mutateScore} from "../../../logic/mutation/scoreMutation";

export const Ones = () => {
    const {ones, setOnes} = useBonusContext()
    const [isAvailable, possibleScore] = useIsScoreAvailableToChoose(ones, handleValidation, handleScoreCalculation)

    return (
        <ScoreBox
            onChosen={() => isAvailable && handleSetOnes()}
            isAvailable={isAvailable}
            value={ones}
        >
            1-s
            <div>{ones.score}</div>
            <div>{isAvailable && possibleScore}</div>
            <div>
                <DiscardButton value={ones} onClick={handleDiscard}/>
            </div>
        </ScoreBox>
    );

    function handleSetOnes() {
        const newState = mutateScore(ones, possibleScore)
        setOnes(newState)
    }

    function handleDiscard() {
        const newState = mutateDiscard(ones)
        setOnes(newState)
    }
}

function handleValidation(dice) {
    return validateDiceContains(dice, 1)
}

function handleScoreCalculation(dice) {
    return calculateDieValueScore(dice, 1)
}