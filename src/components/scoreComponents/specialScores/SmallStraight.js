import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {useSpecialScoresContext} from "../../../context/SpecialScoresContext";
import {hasFieldBeenChosenPreviously, validateSmallStraight} from "../../../logic/specialScoresValidation";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {calculateSmallStraightScore, mapDiceStateToDiceValueArray} from "../../../logic/specialScoresCalculation";
import {useDiceContext} from "../../../context/DiceContext";

export const SmallStraight = () => {
    const {smallStraight, handleSetSmallStraight} = useSpecialScoresContext()
    const {hasRolled} = useDiceContext()
    const [isAvailable, possibleScore] = useIsScoreAvailableToChoose(smallStraight,
        (dice) => validateSmallStraight(mapDiceStateToDiceValueArray(dice)),
        calculateSmallStraightScore)

    return (
        <ScoreBox
            onChosen={() => isAvailable && handleSetSmallStraight()}
            discarded={smallStraight.discarded}
        >
            <div
                style={{color: !hasRolled && !hasFieldBeenChosenPreviously(smallStraight) ? "black" : null}}
                className={hasFieldBeenChosenPreviously(smallStraight) ? "used" : isAvailable ? "available" : "unavailable"}>
                Small straight {smallStraight.score}</div>
            {isAvailable && <div>{possibleScore}</div>}
            <DiscardButton value={smallStraight}  onClick={() => handleSetSmallStraight(true)}/>
        </ScoreBox>
    );
}