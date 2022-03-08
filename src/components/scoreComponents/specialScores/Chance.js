import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {useSpecialScoresContext} from "../../../context/SpecialScoresContext";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {calculateChanceScore} from "../../../logic/calculation/specialScoresCalculation";
import {mutateDiscard, mutateScore} from "../../../logic/mutation/scoreMutation";

export const Chance = () => {
    const {chance, setChance} = useSpecialScoresContext()
    const [isAvailable, possibleScore] = useIsScoreAvailableToChoose(chance, () => true, calculateChanceScore)

    return (
        <ScoreBox
            onChosen={() => isAvailable && handleSetChance()}
            value={chance}
            isAvailable={isAvailable}
        >
            <div>Chance</div>
            <div>{chance.score}</div>
            <div>{isAvailable && possibleScore}</div>
            <DiscardButton value={chance} onClick={handleDiscard}/>
        </ScoreBox>
    );

    function handleSetChance() {
        const newState = mutateScore(chance, possibleScore)
        setChance(newState)
    }

    function handleDiscard() {
        const newState = mutateDiscard(chance)
        setChance(newState)
    }
}