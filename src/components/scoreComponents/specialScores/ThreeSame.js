import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {useSpecialScoresContext} from "../../../context/SpecialScoresContext";
import {hasFieldBeenChosenPreviously, validateNumberOfSameValues} from "../../../logic/specialScoresValidation";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {calculateLargestOfSameValueScore} from "../../../logic/specialScoresCalculation";
import {useDiceContext} from "../../../context/DiceContext";

export const ThreeSame = () => {
    const {threeSame, handleSetNumberOfSame} = useSpecialScoresContext()
    const {hasRolled} = useDiceContext()
    const [isAvailable, possibleScore] = useIsScoreAvailableToChoose(threeSame,
        (dice) => validateNumberOfSameValues(dice, 3),
        (dice) => calculateLargestOfSameValueScore(dice, 3)
    )

    return (
        <ScoreBox
            onChosen={() => isAvailable && handleSetNumberOfSame(3)}
            discarded={threeSame.discarded}
        >
            <div
                style={{color: !hasRolled && !hasFieldBeenChosenPreviously(threeSame) ? "black" : null}}
                className={hasFieldBeenChosenPreviously(threeSame) ? "used" : isAvailable ? "available" : "unavailable"}>
                Three same {threeSame.score}</div>
            {isAvailable && <div>{possibleScore}</div>}
            <DiscardButton value={threeSame}  onClick={() => handleSetNumberOfSame(3, true)}/>
        </ScoreBox>
    );
}