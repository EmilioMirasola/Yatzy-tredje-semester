import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {hasFieldBeenChosenPreviously} from "../../../logic/specialScoresValidation";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {useDiceContext} from "../../../context/DiceContext";
import {useBonusContext} from "../../../context/BonusContext";
import {validateDiceContains} from "../../../logic/bonusScoresValidation";
import {calculateDieValueScore} from "../../../logic/bonusScoresCalculation";

export const Fives = () => {
    const {fives, handleSetChosenDiceValue} = useBonusContext()
    const {hasRolled} = useDiceContext()
    const [isAvailable, possibleScore] = useIsScoreAvailableToChoose(fives, handleValidation, handleScoreCalculation)

    return (
        <ScoreBox
            onChosen={() => isAvailable && handleSetChosenDiceValue(5)}
            discarded={fives.discarded}
        >
            <div
                style={{
                    color: !hasRolled && !hasFieldBeenChosenPreviously(fives) ? "black" : null,
                }}
                className={hasFieldBeenChosenPreviously(fives) ? "used" : isAvailable ? "available" : "unavailable"}>
                5-s
            </div>
            <div>{fives.score}</div>
            <div>{isAvailable && possibleScore}</div>
            <DiscardButton value={fives} onClick={() => handleSetChosenDiceValue(5, true)}/>
        </ScoreBox>
    );
}

function handleValidation(dice) {
    return validateDiceContains(dice, 5)
}

function handleScoreCalculation(dice) {
    return calculateDieValueScore(dice, 5)
}