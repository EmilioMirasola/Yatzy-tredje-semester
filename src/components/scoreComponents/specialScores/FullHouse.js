import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {useSpecialScoresContext} from "../../../context/SpecialScoresContext";
import {hasFieldBeenChosenPreviously, validateFullHouse} from "../../../logic/specialScoresValidation";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {calculateFullHouseScore} from "../../../logic/specialScoresCalculation";
import {useDiceContext} from "../../../context/DiceContext";

export const FullHouse = () => {
    const {fullHouse, handleSetFullHouse} = useSpecialScoresContext()
    const {hasRolled} = useDiceContext()
    const [isAvailable, possibleScore] = useIsScoreAvailableToChoose(fullHouse, validateFullHouse, calculateFullHouseScore)

    return (
        <ScoreBox
            onChosen={() => isAvailable && handleSetFullHouse()}
            discarded={fullHouse.discarded}
        >
            <div
                style={{color: !hasRolled && !hasFieldBeenChosenPreviously(fullHouse) ? "black" : null}}
                className={hasFieldBeenChosenPreviously(fullHouse) ? "used" : isAvailable ? "available" : "unavailable"}>
                Full house {fullHouse.score}</div>
            {isAvailable && <div>{possibleScore}</div>}
            <DiscardButton value={fullHouse}  onClick={() => handleSetFullHouse(true)}/>
        </ScoreBox>
    );
}