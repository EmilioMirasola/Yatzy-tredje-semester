import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {useSpecialScoresContext} from "../../../context/SpecialScoresContext";
import {hasFieldBeenChosenPreviously, validateYatzy} from "../../../logic/specialScoresValidation";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {calculateYatzyScore} from "../../../logic/specialScoresCalculation";
import {useDiceContext} from "../../../context/DiceContext";

export const Yatzy = () => {
    const {yatzy, handleSetYatzy} = useSpecialScoresContext()
    const {hasRolled} = useDiceContext()
    const [isAvailable, possibleScore] = useIsScoreAvailableToChoose(yatzy, validateYatzy, calculateYatzyScore)

    return (
        <ScoreBox
            onChosen={() => isAvailable && handleSetYatzy()}
            discarded={yatzy.discarded}
        >
            <div
                style={{color: !hasRolled && !hasFieldBeenChosenPreviously(yatzy) ? "black" : null}}
                className={hasFieldBeenChosenPreviously(yatzy) ? "used" : isAvailable ? "available" : "unavailable"}>
                Yatzy {yatzy.score}</div>
            {isAvailable && <div>{possibleScore}</div>}
            <DiscardButton value={yatzy} onClick={() => handleSetYatzy(true)}/>
        </ScoreBox>
    );
}