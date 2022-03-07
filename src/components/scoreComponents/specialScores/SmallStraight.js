import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {useSpecialScoresContext} from "../../../context/SpecialScoresContext";
import {validateSmallStraight} from "../../../logic/specialScoresValidation";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {calculateSmallStraightScore, mapDiceStateToDiceValueArray} from "../../../logic/specialScoresCalculation";

export const SmallStraight = () => {
    const {smallStraight, handleSetSmallStraight} = useSpecialScoresContext()
    const [isAvailable, possibleScore] = useIsScoreAvailableToChoose(smallStraight,
        (dice) => validateSmallStraight(mapDiceStateToDiceValueArray(dice)),
        calculateSmallStraightScore)

    return (
        <ScoreBox
            onChosen={() => isAvailable && handleSetSmallStraight()}
            value={smallStraight}
            isAvailable={isAvailable}
        >
            <div>Small straight</div>
            <div>{smallStraight.score}</div>
            <div>{isAvailable && possibleScore}</div>
            <DiscardButton value={smallStraight} onClick={() => handleSetSmallStraight(true)}/>
        </ScoreBox>
    );
}