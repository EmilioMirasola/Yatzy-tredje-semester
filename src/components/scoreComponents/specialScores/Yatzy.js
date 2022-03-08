import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {useSpecialScoresContext} from "../../../context/SpecialScoresContext";
import {validateYatzy} from "../../../logic/validation/specialScoresValidation";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {calculateYatzyScore} from "../../../logic/calculation/specialScoresCalculation";

export const Yatzy = () => {
    const {yatzy, handleSetYatzy} = useSpecialScoresContext()
    const [isAvailable, possibleScore] = useIsScoreAvailableToChoose(yatzy, validateYatzy, calculateYatzyScore)

    return (
        <ScoreBox
            onChosen={() => isAvailable && handleSetYatzy()}
            value={yatzy}
            isAvailable={isAvailable}
        >
            <div>Yatzy</div>
            <div>{yatzy.score}</div>
            <div>{isAvailable && possibleScore}</div>
            <DiscardButton value={yatzy} onClick={() => handleSetYatzy(true)}/>
        </ScoreBox>
    );
}