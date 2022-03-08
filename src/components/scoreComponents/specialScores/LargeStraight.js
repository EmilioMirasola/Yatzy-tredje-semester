import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {useSpecialScoresContext} from "../../../context/SpecialScoresContext";
import {validateLargeStraight} from "../../../logic/validation/specialScoresValidation";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {
    calculateLargeStraightScore,
    mapDiceStateToDiceValueArray
} from "../../../logic/calculation/specialScoresCalculation";
import {mutateDiscard, mutateScore} from "../../../logic/mutation/scoreMutation";

export const LargeStraight = () => {
    const {largeStraight, setLargeStraight} = useSpecialScoresContext()
    const [isAvailable, possibleScore] = useIsScoreAvailableToChoose(largeStraight,
        (dice) => validateLargeStraight(mapDiceStateToDiceValueArray(dice)),
        calculateLargeStraightScore)

    return (
        <ScoreBox
            onChosen={() => isAvailable && handleSetLargeStraight()}
            value={largeStraight}
            isAvailable={isAvailable}
        >
            <div>Large straight</div>
            <div>{largeStraight.score}</div>
            <div>{isAvailable && possibleScore}</div>
            <DiscardButton value={largeStraight} onClick={handleDiscard}/>
        </ScoreBox>
    );

    function handleSetLargeStraight() {
        const newState = mutateScore(largeStraight, possibleScore)
        setLargeStraight(newState)
    }

    function handleDiscard() {
        const newState = mutateDiscard(largeStraight)
        setLargeStraight(newState)
    }
}