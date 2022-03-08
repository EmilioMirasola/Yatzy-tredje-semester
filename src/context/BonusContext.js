import React, {createContext, useContext, useEffect, useState} from "react";
import {useDiceContext} from "./DiceContext";

const initState = {
    score: 0,
    discarded: false,
}

export const BonusContext = ({children}) => {
    const [ones, setOnes] = useState(initState)
    const [twos, setTwos] = useState(initState)
    const [threes, setThrees] = useState(initState)
    const [fours, setFours] = useState(initState)
    const [fives, setFives] = useState(initState)
    const [sixes, setSixes] = useState(initState)
    const [bonusSum, setBonusSum] = useState(0)

    const {handleScoreChosen} = useDiceContext()

    useEffect(handleScoreChange, [ones, twos, threes, fours, fives, sixes]);

    return (<Context.Provider value={{
        ones,
        setOnes,
        twos,
        setTwos,
        threes,
        setThrees,
        fours,
        setFours,
        fives,
        setFives,
        sixes,
        setSixes,
        bonusSum
    }}>
        {children}
    </Context.Provider>)

    function handleScoreChange() {
        handleScoreChosen();
        setBonusSum(ones.score + twos.score + threes.score + fours.score + fives.score + sixes.score);
    }
}

const Context = createContext(null);

export const useBonusContext = () => useContext(Context)