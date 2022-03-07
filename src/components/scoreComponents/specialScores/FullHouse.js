import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {useSpecialScoresContext} from "../../../context/SpecialScoresContext";
import {validateFullHouse} from "../../../logic/specialScoresValidation";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {calculateFullHouseScore} from "../../../logic/specialScoresCalculation";

export const FullHouse = () => {
    const {fullHouse, handleSetFullHouse} = useSpecialScoresContext()
    const [isAvailable, possibleScore] = useIsScoreAvailableToChoose(fullHouse, validateFullHouse, calculateFullHouseScore)

    return (
        <ScoreBox
            onChosen={() => isAvailable && handleSetFullHouse()}
            value={fullHouse}
            isAvailable={isAvailable}
        >
            <div>Full house</div>
            <div>{fullHouse.score}</div>
            <div>{isAvailable && possibleScore}</div>
            <DiscardButton value={fullHouse} onClick={() => handleSetFullHouse(true)}/>
        </ScoreBox>
    );
}