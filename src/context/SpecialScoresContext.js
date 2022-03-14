import { createContext, useContext, useEffect, useState } from "react";
import { useDiceContext } from "./DiceContext";

const initState = {
    score: 0, discarded: false,
}

export const SpecialScoresContext = ({ children }) => {
    const [onePair, setOnePair] = useState(initState)
    const [twoPairs, setTwoPairs] = useState(initState)
    const [threeSame, setThreeSame] = useState(initState)
    const [fourSame, setFourSame] = useState(initState)
    const [fullHouse, setFullHouse] = useState(initState)
    const [smallStraight, setSmallStraight] = useState(initState)
    const [largeStraight, setLargeStraight] = useState(initState)
    const [chance, setChance] = useState(initState)
    const [yatzy, setYatzy] = useState(initState)
    const [specialScoresSum, setSpecialScoresSum] = useState(0)
    const [allSpecialScoresSet, setAllSpecialScoresSet] = useState(false)

    const { handleScoreChosen } = useDiceContext()

    useEffect(() => {
        handleScoreChange();
        checkIfAllScoresAreSet();
    }, [onePair, twoPairs, threeSame, fourSame, fullHouse, smallStraight, largeStraight, chance, yatzy])

    return (
        <Context.Provider value={{
            onePair, setOnePair,
            twoPairs, setTwoPairs,
            threeSame, setThreeSame,
            fourSame, setFourSame,
            fullHouse, setFullHouse,
            smallStraight, setSmallStraight,
            largeStraight, setLargeStraight,
            chance, setChance,
            yatzy, setYatzy,
            specialScoresSum,
            allSpecialScoresSet
        }}>
            {children}
        </Context.Provider>)

    function handleScoreChange() {
        setSpecialScoresSum(onePair.score + twoPairs.score + threeSame.score + fourSame.score + fullHouse.score + smallStraight.score + largeStraight.score + chance.score + yatzy.score);
        handleScoreChosen()
    }

    function checkIfAllScoresAreSet() {
        const states = [onePair, twoPairs, threeSame, fourSame, fullHouse, smallStraight, largeStraight, chance, yatzy, specialScoresSum]

        const allSet = states.every(state => state.score !== 0 || state.discarded)
        setAllSpecialScoresSet(allSet)
    }

}

const Context = createContext(null);

export const useSpecialScoresContext = () => useContext(Context)