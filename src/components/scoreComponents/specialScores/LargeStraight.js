import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {useSpecialScoresContext} from "../../../context/SpecialScoresContext";
import {hasFieldBeenChosenPreviously, validateLargeStraight} from "../../../logic/specialScoresValidation";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {calculateLargeStraightScore, mapDiceStateToDiceValueArray} from "../../../logic/specialScoresCalculation";
import {useDiceContext} from "../../../context/DiceContext";

export const LargeStraight = () => {
    const {largeStraight, handleSetLargeStraight} = useSpecialScoresContext()
    const {hasRolled} = useDiceContext()
    const [isAvailable, possibleScore] = useIsScoreAvailableToChoose(largeStraight,
        (dice) => validateLargeStraight(mapDiceStateToDiceValueArray(dice)),
        calculateLargeStraightScore)

    return (
        <ScoreBox
            onChosen={() => isAvailable && handleSetLargeStraight()}
            discarded={largeStraight.discarded}
        >
            <div
                style={{color: !hasRolled && !hasFieldBeenChosenPreviously(largeStraight) ? "black" : null}}
                className={hasFieldBeenChosenPreviously(largeStraight) ? "used" : isAvailable ? "available" : "unavailable"}>
                Large straight {largeStraight.score}</div>
            {isAvailable && <div>{possibleScore}</div>}
            <DiscardButton value={largeStraight}  onClick={() => handleSetLargeStraight(true)}/>
        </ScoreBox>
    );
}