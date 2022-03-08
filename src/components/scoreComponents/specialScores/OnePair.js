import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {useSpecialScoresContext} from "../../../context/SpecialScoresContext";
import {validateOnePair} from "../../../logic/validation/specialScoresValidation";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {findHighestPairValue} from "../../../logic/calculation/specialScoresCalculation";

export const OnePair = () => {
    const {onePair, handleSetOnePair} = useSpecialScoresContext()
    const [isAvailable, possibleScore] = useIsScoreAvailableToChoose(onePair, validateOnePair, findHighestPairValue)

    return (
        <ScoreBox
            onChosen={() => isAvailable && handleSetOnePair()}
            value={onePair}
            isAvailable={isAvailable}
        >
            One pair
            <div>{onePair.score}</div>
            <div>{isAvailable && possibleScore}</div>
            <DiscardButton value={onePair} onClick={() => handleSetOnePair(true)}/>
        </ScoreBox>
    );
}