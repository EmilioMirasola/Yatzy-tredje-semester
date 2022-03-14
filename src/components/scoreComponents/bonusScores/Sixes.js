import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {useBonusContext} from "../../../context/BonusContext";
import {validateDiceContains} from "../../../logic/validation/bonusScoresValidation";
import {calculateDieValueScore} from "../../../logic/calculation/bonusScoresCalculation";
import {mutateDiscard, mutateScore} from "../../../logic/mutation/scoreMutation";

export const Sixes = ({onChosen}) => {
    const {sixes, setSixes} = useBonusContext()
    const [isAvailable, possibleScore] = useIsScoreAvailableToChoose(sixes, handleValidation, handleScoreCalculation)

    return (
        <ScoreBox
            onChosen={() => isAvailable && onChosen(possibleScore)}
            value={sixes}
            isAvailable={isAvailable}
        >
            <div>6-s</div>
            <div>{sixes.score}</div>
            <div>{isAvailable && possibleScore}</div>
            <DiscardButton value={sixes}
                           onClick={handleDiscard}/>
        </ScoreBox>
    );

    function handleSetFives() {
        const newState = mutateScore(sixes, possibleScore)
        setSixes(newState)
    }

    function handleDiscard() {
        const newState = mutateDiscard(sixes)
        setSixes(newState)
    }
}

function handleValidation(dice) {
    return validateDiceContains(dice, 6)
}

function handleScoreCalculation(dice) {
    return calculateDieValueScore(dice, 6)
}