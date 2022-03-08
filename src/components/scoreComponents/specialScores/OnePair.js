import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {useSpecialScoresContext} from "../../../context/SpecialScoresContext";
import {validateOnePair} from "../../../logic/validation/specialScoresValidation";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {findHighestPairValue} from "../../../logic/calculation/specialScoresCalculation";
import {mutateDiscard, mutateScore} from "../../../logic/mutation/scoreMutation";

export const OnePair = () => {
    const {onePair, setOnePair} = useSpecialScoresContext()
    const [isAvailable, possibleScore] = useIsScoreAvailableToChoose(onePair, validateOnePair, findHighestPairValue)

    return (
        <ScoreBox
            onChosen={() => isAvailable && handleSetOnes()}
            value={onePair}
            isAvailable={isAvailable}
        >
            One pair
            <div>{onePair.score}</div>
            <div>{isAvailable && possibleScore}</div>
            <DiscardButton value={onePair} onClick={handleDiscard}/>
        </ScoreBox>
    );

    function handleSetOnes() {
        const newState = mutateScore(onePair, possibleScore)
        setOnePair(newState)
    }

    function handleDiscard() {
        const newState = mutateDiscard(onePair)
        setOnePair(newState)
    }
}