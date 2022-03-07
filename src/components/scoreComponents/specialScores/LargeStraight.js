import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {useSpecialScoresContext} from "../../../context/SpecialScoresContext";
import {validateLargeStraight} from "../../../logic/specialScoresValidation";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {calculateLargeStraightScore, mapDiceStateToDiceValueArray} from "../../../logic/specialScoresCalculation";

export const LargeStraight = () => {
    const {largeStraight, handleSetLargeStraight} = useSpecialScoresContext()
    const [isAvailable, possibleScore] = useIsScoreAvailableToChoose(largeStraight,
        (dice) => validateLargeStraight(mapDiceStateToDiceValueArray(dice)),
        calculateLargeStraightScore)

    return (
        <ScoreBox
            onChosen={() => isAvailable && handleSetLargeStraight()}
            value={largeStraight}
            isAvailable={isAvailable}
        >
            <div>Large straight</div>
            <div>{largeStraight.score}</div>
            <div>{isAvailable && possibleScore}</div>
            <DiscardButton value={largeStraight} onClick={() => handleSetLargeStraight(true)}/>
        </ScoreBox>
    );
}