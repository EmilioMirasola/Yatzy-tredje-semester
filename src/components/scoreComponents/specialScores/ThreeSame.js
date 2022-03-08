import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {useSpecialScoresContext} from "../../../context/SpecialScoresContext";
import {validateNumberOfSameValues} from "../../../logic/validation/specialScoresValidation";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {calculateLargestOfSameValueScore} from "../../../logic/calculation/specialScoresCalculation";

export const ThreeSame = () => {
    const {threeSame, handleSetNumberOfSame} = useSpecialScoresContext()
    const [isAvailable, possibleScore] = useIsScoreAvailableToChoose(threeSame,
        (dice) => validateNumberOfSameValues(dice, 3),
        (dice) => calculateLargestOfSameValueScore(dice, 3)
    )

    return (
        <ScoreBox
            onChosen={() => isAvailable && handleSetNumberOfSame(3)}
            value={threeSame}
            isAvailable={isAvailable}
        >
            <div>Three same</div>
            <div>{threeSame.score}</div>
            <div>{isAvailable && possibleScore}</div>
            <DiscardButton value={threeSame} onClick={() => handleSetNumberOfSame(3, true)}/>
        </ScoreBox>
    );
}