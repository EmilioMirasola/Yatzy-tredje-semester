import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {useSpecialScoresContext} from "../../../context/SpecialScoresContext";
import {hasFieldBeenChosenPreviously, validateNumberOfSameValues} from "../../../logic/specialScoresValidation";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {calculateLargestOfSameValueScore} from "../../../logic/specialScoresCalculation";
import {useDiceContext} from "../../../context/DiceContext";

export const FourSame = () => {
    const {fourSame, handleSetNumberOfSame} = useSpecialScoresContext()
    const {hasRolled} = useDiceContext()
    const [isAvailable, possibleScore] = useIsScoreAvailableToChoose(fourSame,
        (dice) => validateNumberOfSameValues(dice, 4),
        (dice) => calculateLargestOfSameValueScore(dice, 4)
    )

    return (
        <ScoreBox
            onChosen={() => isAvailable && handleSetNumberOfSame(4)}
            discarded={fourSame.discarded}
        >
            <div
                style={{color: !hasRolled && !hasFieldBeenChosenPreviously(fourSame) ? "black" : null}}
                className={hasFieldBeenChosenPreviously(fourSame) ? "used" : isAvailable ? "available" : "unavailable"}>
                Four same {fourSame.score}</div>
            {isAvailable && <div>{possibleScore}</div>}
            <DiscardButton value={fourSame} onClick={() => handleSetNumberOfSame(4, true)}/>
        </ScoreBox>
    );
}