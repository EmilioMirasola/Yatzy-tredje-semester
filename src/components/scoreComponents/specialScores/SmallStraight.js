import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {useSpecialScoresContext} from "../../../context/SpecialScoresContext";
import {validateSmallStraight} from "../../../logic/validation/specialScoresValidation";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {
    calculateSmallStraightScore,
    mapDiceStateToDiceValueArray
} from "../../../logic/calculation/specialScoresCalculation";
import {mutateDiscard, mutateScore} from "../../../logic/mutation/scoreMutation";

export const SmallStraight = () => {
    const {smallStraight, setSmallStraight} = useSpecialScoresContext()
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
            <DiscardButton value={smallStraight} onClick={handleDiscard}/>
        </ScoreBox>
    );

    function handleSetSmallStraight() {
        const newState = mutateScore(smallStraight, possibleScore)
        setSmallStraight(newState)
    }

    function handleDiscard() {
        const newState = mutateDiscard(smallStraight)
        setSmallStraight(newState)
    }
}