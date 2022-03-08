import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {useSpecialScoresContext} from "../../../context/SpecialScoresContext";
import {validateNumberOfSameValues} from "../../../logic/validation/specialScoresValidation";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {calculateLargestOfSameValueScore} from "../../../logic/calculation/specialScoresCalculation";
import {mutateDiscard, mutateScore} from "../../../logic/mutation/scoreMutation";

export const FourSame = () => {
    const {fourSame, setFourSame} = useSpecialScoresContext()
    const [isAvailable, possibleScore] = useIsScoreAvailableToChoose(fourSame,
        (dice) => validateNumberOfSameValues(dice, 4),
        (dice) => calculateLargestOfSameValueScore(dice, 4)
    )

    return (
        <ScoreBox
            onChosen={() => isAvailable && handleSetFours()}
            value={fourSame}
            isAvailable={isAvailable}
        >
            <div>Four same</div>
            <div>{fourSame.score}</div>
            <div>{isAvailable && possibleScore}</div>
            <DiscardButton value={fourSame} onClick={handleDiscard}/>
        </ScoreBox>
    );

    function handleSetFours() {
        const newState = mutateScore(fourSame, possibleScore)
        setFourSame(newState)
    }

    function handleDiscard() {
        const newState = mutateDiscard(fourSame)
        setFourSame(newState)
    }
}