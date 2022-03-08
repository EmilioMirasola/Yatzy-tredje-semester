import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {useBonusContext} from "../../../context/BonusContext";
import {validateDiceContains} from "../../../logic/validation/bonusScoresValidation";
import {calculateDieValueScore} from "../../../logic/calculation/bonusScoresCalculation";
import {mutateDiscard, mutateScore} from "../../../logic/mutation/scoreMutation";

export const Twos = () => {
    const {twos, setTwos} = useBonusContext()
    const [isAvailable, possibleScore] = useIsScoreAvailableToChoose(twos, handleValidation, handleScoreCalculation)

    return (
        <ScoreBox
            onChosen={() => isAvailable && handleSetTwos()}
            isAvailable={isAvailable}
            value={twos}
        >
            <div>2-s</div>
            <div>{twos.score}</div>
            <div>{isAvailable && possibleScore}</div>
            <DiscardButton value={twos} onClick={handleDiscard}/>
        </ScoreBox>
    );

    function handleSetTwos() {
        const newState = mutateScore(twos, possibleScore)
        setTwos(newState)
    }

    function handleDiscard() {
        const newState = mutateDiscard(twos)
        setTwos(newState)
    }

}

function handleValidation(dice) {
    return validateDiceContains(dice, 2)
}

function handleScoreCalculation(dice) {
    return calculateDieValueScore(dice, 2)
}
