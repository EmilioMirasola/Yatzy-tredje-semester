import { useEffect, useMemo, useState } from "react";
import { useBonusContext } from "../context/BonusContext";
import { useSpecialScoresContext } from "../context/SpecialScoresContext";
import { updateTop10Scores } from "../logic/calculation/topScoresUtils";
import { getInLocalStorage } from "../logic/persistence/localStorageUtils";
import styled from "styled-components"

const TopScoresBox = styled.div`
    position: absolute;
    right: 10%;
    top: 10%;
`


export const Highscores = () => {
    const { allBonusScoresSet, bonusSum } = useBonusContext()
    const { allSpecialScoresSet, specialScoresSum } = useSpecialScoresContext()
    const [top10Scores, setTop10Scores] = useState(getInLocalStorage("top10Scores"))

    useEffect(() => {
        if (allBonusScoresSet && allSpecialScoresSet) {
            updateTop10Scores(bonusSum + specialScoresSum + (bonusSum >= 63 ? 50 : 0))
                .then(() => {
                    setTop10Scores(getInLocalStorage("top10Scores"))
                })
        }
    }, [allBonusScoresSet, allSpecialScoresSet])

    return (
        <TopScoresBox>
            <h2>Highscores</h2>
            {!top10Scores && <h3>Play a game to get it on your highscore!</h3>}
            {top10Scores && top10Scores.map(score => {
                return <div>{score}</div>
            })}
        </TopScoresBox>
    );
}