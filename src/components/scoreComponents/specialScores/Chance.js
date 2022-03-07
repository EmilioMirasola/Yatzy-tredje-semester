import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {useSpecialScoresContext} from "../../../context/SpecialScoresContext";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {calculateChanceScore} from "../../../logic/specialScoresCalculation";

export const Chance = () => {
    const {chance, handleSetChance} = useSpecialScoresContext()
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
            <DiscardButton value={chance} onClick={() => handleSetChance(true)}/>
        </ScoreBox>
    );
}