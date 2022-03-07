import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {useSpecialScoresContext} from "../../../context/SpecialScoresContext";
import {hasFieldBeenChosenPreviously} from "../../../logic/specialScoresValidation";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {calculateChanceScore} from "../../../logic/specialScoresCalculation";
import {useDiceContext} from "../../../context/DiceContext";

export const Chance = () => {
    const {chance, handleSetChance} = useSpecialScoresContext()
    const {hasRolled} = useDiceContext()
    const [isAvailable, possibleScore] = useIsScoreAvailableToChoose(chance, () => true, calculateChanceScore)

    return (
        <ScoreBox
            onChosen={() => isAvailable && handleSetChance()}
            discarded={chance.discarded}
        >
            <div
                style={{color: !hasRolled && !hasFieldBeenChosenPreviously(chance) ? "black" : null}}
                className={hasFieldBeenChosenPreviously(chance) ? "used" : isAvailable ? "available" : "unavailable"}>
                Chance {chance.score}</div>
            {isAvailable && <div>{possibleScore}</div>}
            <DiscardButton value={chance}  onClick={() => handleSetChance(true)}/>
        </ScoreBox>
    );
}