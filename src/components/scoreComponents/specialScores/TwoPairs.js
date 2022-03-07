import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {useSpecialScoresContext} from "../../../context/SpecialScoresContext";
import {hasFieldBeenChosenPreviously, validateTwoPairs} from "../../../logic/specialScoresValidation";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {calculateTwoPairsScore} from "../../../logic/specialScoresCalculation";
import {useDiceContext} from "../../../context/DiceContext";

export const TwoPairs = () => {
    const {twoPairs, handleSetTwoPairs} = useSpecialScoresContext()
    const {hasRolled} = useDiceContext()
    const [isAvailable, possibleScore] = useIsScoreAvailableToChoose(twoPairs, validateTwoPairs, calculateTwoPairsScore)

    return (<ScoreBox
            onChosen={() => isAvailable && handleSetTwoPairs()}
            discarded={twoPairs.discarded}
        >
            <div
                style={{color: !hasRolled && !hasFieldBeenChosenPreviously(twoPairs) ? "black" : null}}
                className={hasFieldBeenChosenPreviously(twoPairs) ? "used" : isAvailable ? "available" : "unavailable"}>
                Two pairs {twoPairs.score}</div>
            {isAvailable && <div>{possibleScore}</div>}
            <DiscardButton value={twoPairs}  onClick={() => handleSetTwoPairs(true)}/>
        </ScoreBox>
    );
}