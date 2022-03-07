import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {useSpecialScoresContext} from "../../../context/SpecialScoresContext";
import {validateTwoPairs} from "../../../logic/specialScoresValidation";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {calculateTwoPairsScore} from "../../../logic/specialScoresCalculation";

export const TwoPairs = () => {
    const {twoPairs, handleSetTwoPairs} = useSpecialScoresContext()
    const [isAvailable, possibleScore] = useIsScoreAvailableToChoose(twoPairs, validateTwoPairs, calculateTwoPairsScore)

    return (<ScoreBox
            onChosen={() => isAvailable && handleSetTwoPairs()}
            value={twoPairs}
            isAvailable={isAvailable}
        >
            <div>Two pairs</div>
            <div>{twoPairs.score}</div>
            <div>{isAvailable && possibleScore}</div>
            <DiscardButton value={twoPairs} onClick={() => handleSetTwoPairs(true)}/>
        </ScoreBox>
    );
}