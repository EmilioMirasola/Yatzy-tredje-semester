import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {useSpecialScoresContext} from "../../../context/SpecialScoresContext";
import {validateOnePair} from "../../../logic/validation/specialScoresValidation";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {findHighestPairValue} from "../../../logic/calculation/specialScoresCalculation";
import {mutateDiscard} from "../../../logic/mutation/scoreMutation";

export const OnePair = ({onChosen}) => {
    const {onePair, setOnePair} = useSpecialScoresContext()
    const [isAvailable, possibleScore] = useIsScoreAvailableToChoose(onePair, validateOnePair, findHighestPairValue)

    return (
        <ScoreBox
            onChosen={() => isAvailable && onChosen(possibleScore)}
            value={onePair}
            isAvailable={isAvailable}
        >
            One pair
            <div>{onePair.score}</div>
            <div>{isAvailable && possibleScore}</div>
            <DiscardButton value={onePair} onClick={handleDiscard}/>
        </ScoreBox>
    );

    function handleDiscard() {
        const newState = mutateDiscard(onePair)
        setOnePair(newState)
    }
}