import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {useSpecialScoresContext} from "../../../context/SpecialScoresContext";
import {validateFullHouse} from "../../../logic/validation/specialScoresValidation";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {calculateFullHouseScore} from "../../../logic/calculation/specialScoresCalculation";
import {mutateDiscard, mutateScore} from "../../../logic/mutation/scoreMutation";

export const FullHouse = () => {
    const {fullHouse, setFullHouse} = useSpecialScoresContext()
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
            <DiscardButton value={fullHouse} onClick={handleDiscard}/>
        </ScoreBox>
    );

    function handleSetFullHouse() {
        const newState = mutateScore(fullHouse, possibleScore)
        setFullHouse(newState)
    }

    function handleDiscard() {
        const newState = mutateDiscard(fullHouse)
        setFullHouse(newState)
    }
}