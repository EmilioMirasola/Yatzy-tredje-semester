import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {useSpecialScoresContext} from "../../../context/SpecialScoresContext";
import {validateLargeStraight} from "../../../logic/validation/specialScoresValidation";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {
    calculateLargeStraightScore,
    mapDiceStateToDiceValueArray
} from "../../../logic/calculation/specialScoresCalculation";
import {mutateDiscard} from "../../../logic/mutation/scoreMutation";

export const LargeStraight = ({onChosen}) => {
    const {largeStraight, setLargeStraight} = useSpecialScoresContext()
    const [isAvailable, possibleScore] = useIsScoreAvailableToChoose(largeStraight,
        (dice) => validateLargeStraight(mapDiceStateToDiceValueArray(dice)),
        calculateLargeStraightScore)

    return (
        <ScoreBox
            onChosen={() => isAvailable && onChosen(possibleScore)}
            value={largeStraight}
            isAvailable={isAvailable}
        >
            <div>Large straight</div>
            <div>{largeStraight.score}</div>
            <div>{isAvailable && possibleScore}</div>
            <DiscardButton value={largeStraight} onClick={handleDiscard}/>
        </ScoreBox>
    );
    function handleDiscard() {
        const newState = mutateDiscard(largeStraight)
        setLargeStraight(newState)
    }
}