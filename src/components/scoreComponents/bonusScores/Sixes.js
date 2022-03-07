import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {hasFieldBeenChosenPreviously} from "../../../logic/specialScoresValidation";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {useDiceContext} from "../../../context/DiceContext";
import {useBonusContext} from "../../../context/BonusContext";
import {validateDiceContains} from "../../../logic/bonusScoresValidation";
import {calculateDieValueScore} from "../../../logic/bonusScoresCalculation";

export const Sixes = () => {
    const {sixes, handleSetChosenDiceValue} = useBonusContext()
    const {hasRolled} = useDiceContext()
    const [isAvailable, possibleScore] = useIsScoreAvailableToChoose(sixes, handleValidation, handleScoreCalculation)

    return (
        <ScoreBox
            onChosen={() => isAvailable && handleSetChosenDiceValue(6)}
            discarded={sixes.discarded}
        >
            <div
                style={{
                    color: !hasRolled && !hasFieldBeenChosenPreviously(sixes) ? "black" : null,
                }}
                className={hasFieldBeenChosenPreviously(sixes) ? "used" : isAvailable ? "available" : "unavailable"}>
                6-s
            </div>
            <div>{sixes.score}</div>
            <div>{isAvailable && possibleScore}</div>
            <DiscardButton value={sixes}
                           onClick={() => handleSetChosenDiceValue(6, true)}/>
        </ScoreBox>
    );
}

function handleValidation(dice) {
    return validateDiceContains(dice, 6)
}

function handleScoreCalculation(dice) {
    return calculateDieValueScore(dice, 6)
}