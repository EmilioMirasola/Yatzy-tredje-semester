import {ScoreBox} from "../ScoreBox";
import {DiscardButton} from "../../DiscardButton";
import {useSpecialScoresContext} from "../../../context/SpecialScoresContext";
import {validateYatzy} from "../../../logic/validation/specialScoresValidation";
import {useIsScoreAvailableToChoose} from "../../../hooks/useIsScoreAvailableToChoose";
import {calculateYatzyScore} from "../../../logic/calculation/specialScoresCalculation";
import {mutateDiscard} from "../../../logic/mutation/scoreMutation";

export const Yatzy = ({onChosen}) => {
    const {yatzy, setYatzy} = useSpecialScoresContext()
    const [isAvailable, possibleScore] = useIsScoreAvailableToChoose(yatzy, validateYatzy, calculateYatzyScore)

    return (
        <ScoreBox
            onChosen={() => isAvailable && onChosen(possibleScore)}
            value={yatzy}
            isAvailable={isAvailable}
        >
            <div>Yatzy</div>
            <div>{yatzy.score}</div>
            <div>{isAvailable && possibleScore}</div>
            <DiscardButton value={yatzy} onClick={handleDiscard}/>
        </ScoreBox>
    );

    function handleDiscard() {
        const newState = mutateDiscard(yatzy)
        setYatzy(newState)
    }
}