import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {useSpecialScoresContext} from "../../../context/SpecialScoresContext";
import {validateNumberOfSameValues} from "../../../logic/validation/specialScoresValidation";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {calculateLargestOfSameValueScore} from "../../../logic/calculation/specialScoresCalculation";
import {mutateDiscard} from "../../../logic/mutation/scoreMutation";

export const ThreeSame = ({onChosen}) => {
    const {threeSame, setThreeSame} = useSpecialScoresContext()
    const [isAvailable, possibleScore] = useIsScoreAvailableToChoose(threeSame,
        (dice) => validateNumberOfSameValues(dice, 3),
        (dice) => calculateLargestOfSameValueScore(dice, 3)
    )

    return (
        <ScoreBox
            onChosen={() => isAvailable && onChosen(possibleScore)}
            value={threeSame}
            isAvailable={isAvailable}
        >
            <div>Three same</div>
            <div>{threeSame.score}</div>
            <div>{isAvailable && possibleScore}</div>
            <DiscardButton value={threeSame} onClick={handleDiscard}/>
        </ScoreBox>
    );

    function handleDiscard() {
        const newState = mutateDiscard(threeSame)
        setThreeSame(newState)
    }
}