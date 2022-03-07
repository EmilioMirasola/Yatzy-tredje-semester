import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {hasFieldBeenChosenPreviously} from "../../../logic/specialScoresValidation";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {useDiceContext} from "../../../context/DiceContext";
import {useBonusContext} from "../../../context/BonusContext";
import {validateDiceContains} from "../../../logic/bonusScoresValidation";
import {calculateDieValueScore} from "../../../logic/bonusScoresCalculation";

export const Threes = () => {
    const {threes, handleSetChosenDiceValue} = useBonusContext()
    const {hasRolled} = useDiceContext()
    const [isAvailable, possibleScore] = useIsScoreAvailableToChoose(threes, handleValidation, handleScoreCalculation)

    return (
        <ScoreBox
            onChosen={() => isAvailable && handleSetChosenDiceValue(3)}
            discarded={threes.discarded}
        >
            <div
                style={{
                    color: !hasRolled && !hasFieldBeenChosenPreviously(threes) ? "black" : null,
                }}
                className={hasFieldBeenChosenPreviously(threes) ? "used" : isAvailable ? "available" : "unavailable"}>
                3-s
            </div>
            <div>{threes.score}</div>
            <div>{isAvailable && possibleScore}</div>
            <DiscardButton value={threes} onClick={() => handleSetChosenDiceValue(3, true)}/>
        </ScoreBox>
    );
}

function handleValidation(dice) {
    return validateDiceContains(dice, 3)
}

function handleScoreCalculation(dice) {
    return calculateDieValueScore(dice, 3)
}