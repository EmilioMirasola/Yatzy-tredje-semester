import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {useSpecialScoresContext} from "../../../context/SpecialScoresContext";
import {validateTwoPairs} from "../../../logic/validation/specialScoresValidation";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {calculateTwoPairsScore} from "../../../logic/calculation/specialScoresCalculation";
import {mutateDiscard, mutateScore} from "../../../logic/mutation/scoreMutation";

export const TwoPairs = () => {
    const {twoPairs, setTwoPairs} = useSpecialScoresContext()
    const [isAvailable, possibleScore] = useIsScoreAvailableToChoose(twoPairs, validateTwoPairs, calculateTwoPairsScore)

    return (<ScoreBox
            onChosen={() => isAvailable && handleSetTwos()}
            value={twoPairs}
            isAvailable={isAvailable}
        >
            <div>Two pairs</div>
            <div>{twoPairs.score}</div>
            <div>{isAvailable && possibleScore}</div>
            <DiscardButton value={twoPairs} onClick={handleDiscard}/>
        </ScoreBox>
    );

    function handleSetTwos() {
        const newState = mutateScore(twoPairs, possibleScore)
        setTwoPairs(newState)
    }

    function handleDiscard() {
        const newState = mutateDiscard(twoPairs)
        setTwoPairs(newState)
    }
}