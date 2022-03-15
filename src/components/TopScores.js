import { useBonusContext } from "../context/BonusContext";
import { useSpecialScoresContext } from "../context/SpecialScoresContext";
import { getInLocalStorage } from "../logic/persistence/localStorageUtils";
import { updateTop10Scores } from "../logic/calculation/topScoresUtils";
import { useEffect, useState } from "react";

export const TopScores = () => {
    const { allBonusScoresSet, bonusSum } = useBonusContext()
    const { allSpecialScoresSet, specialScoresSum } = useSpecialScoresContext()
    const top10Scores = getInLocalStorage("top10Scores")
    const [ok, setOk] = useState(false)

    useEffect(() => {
        if (allBonusScoresSet && allSpecialScoresSet) {
            updateTop10Scores(bonusSum + specialScoresSum)
        }
    }, [allBonusScoresSet, allSpecialScoresSet])


    return (
        <div className='topScores'>
            <h2>Top scores</h2>
            {top10Scores && top10Scores.map(score => {
                return <div>{score}</div>
            })}
            {allBonusScoresSet && allSpecialScoresSet}
            <button onClick={() => {
                setOk(!ok)
                updateTop10Scores(bonusSum + specialScoresSum);
            }}>Update</button>
        </div>
    );
}