import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {useSpecialScoresContext} from "../../../context/SpecialScoresContext";
import {validateTwoPairs} from "../../../logic/validation/specialScoresValidation";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {calculateTwoPairsScore} from "../../../logic/calculation/specialScoresCalculation";
import {mutateDiscard} from "../../../logic/mutation/scoreMutation";

export const TwoPairs = ({onChosen}) => {
    const {twoPairs, setTwoPairs} = useSpecialScoresContext()
    const [isAvailable, possibleScore] = useIsScoreAvailableToChoose(twoPairs, validateTwoPairs, calculateTwoPairsScore)

    return (<ScoreBox
            onChosen={() => isAvailable && onChosen(possibleScore)}
            value={twoPairs}
            isAvailable={isAvailable}
        >
            <div>Two pairs</div>
            <div>{twoPairs.score}</div>
            <div>{isAvailable && possibleScore}</div>
            <DiscardButton value={twoPairs} onClick={handleDiscard}/>
        </ScoreBox>
    );

    function handleDiscard() {
        const newState = mutateDiscard(twoPairs)
        setTwoPairs(newState)
    }
}