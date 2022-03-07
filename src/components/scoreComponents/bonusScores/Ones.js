import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {hasFieldBeenChosenPreviously} from "../../../logic/specialScoresValidation";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {useDiceContext} from "../../../context/DiceContext";
import {useBonusContext} from "../../../context/BonusContext";
import {validateDiceContains} from "../../../logic/bonusScoresValidation";
import {calculateDieValueScore} from "../../../logic/bonusScoresCalculation";
import "../ScoreBox.css"
import "../bonusScores/bonus.css"

export const Ones = () => {
    const {ones, handleSetChosenDiceValue} = useBonusContext()
    const {hasRolled} = useDiceContext()
    const [isAvailable, possibleScore] = useIsScoreAvailableToChoose(ones, handleValidation, handleScoreCalculation)

    return (
        <div
            onClick={() => isAvailable && handleSetChosenDiceValue(1)}
            style={{
                color: !hasRolled && !hasFieldBeenChosenPreviously(ones) ? "black" : null,
            }}
            className={`${hasFieldBeenChosenPreviously(ones) ? "used" : isAvailable ? "available" : "unavailable"}"`}>
            <div className={"type"}>
                1-s
            </div>
            <div>{ones.score}</div>
            <div>{isAvailable && possibleScore}</div>
            <div>
                <DiscardButton value={ones} onClick={() => handleSetChosenDiceValue(1, true)}/>
            </div>
        </div>
    );
}

function handleValidation(dice) {
    return validateDiceContains(dice, 1)
}

function handleScoreCalculation(dice) {
    return calculateDieValueScore(dice, 1)
}