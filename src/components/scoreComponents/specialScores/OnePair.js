import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {useSpecialScoresContext} from "../../../context/SpecialScoresContext";
import {hasFieldBeenChosenPreviously, validateOnePair} from "../../../logic/specialScoresValidation";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {findHighestPairValue} from "../../../logic/specialScoresCalculation";
import {useDiceContext} from "../../../context/DiceContext";

export const OnePair = () => {
    const {onePair, handleSetOnePair} = useSpecialScoresContext()
    const {hasRolled} = useDiceContext()
    const [isAvailable, possibleScore] = useIsScoreAvailableToChoose(onePair, validateOnePair, findHighestPairValue)

    return (
        <ScoreBox
            onChosen={() => isAvailable && handleSetOnePair()}
            discarded={onePair.discarded}
        >
            <div
                style={{color: !hasRolled && !hasFieldBeenChosenPreviously(onePair) ? "black" : null}}
                className={hasFieldBeenChosenPreviously(onePair) ? "used" : isAvailable ? "available" : "unavailable"}>
                One pair
            </div>
            <div>{onePair.score}</div>
            {isAvailable && <div>{possibleScore}</div>}
            <DiscardButton value={onePair} onClick={() => handleSetOnePair(true)}/>
        </ScoreBox>
    );
}