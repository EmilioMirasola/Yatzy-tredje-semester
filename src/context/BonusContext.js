import React, {createContext, useContext, useEffect, useState} from "react";
import {useDiceContext} from "./DiceContext";
import {calculateDieValueScore} from "../logic/bonusScoresCalculation";

const initState = {
    score: 0,
    locked: false,
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

    const {diceStates, handleScoreChosen} = useDiceContext()

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
        handleSetChosenDiceValue,
        bonusSum
    }}>
        {children}
    </Context.Provider>)

    function handleSetChosenDiceValue(diceValue, discard) {

        const score = calculateDieValueScore(diceStates, diceValue)

        let newObjToManipulate;
        let setterFunction;

        switch (diceValue) {
            case 1:
                newObjToManipulate = {...ones}
                setterFunction = setOnes
                break;
            case 2:
                newObjToManipulate = {...twos}
                setterFunction = setTwos
                break;
            case 3:
                newObjToManipulate = {...threes}
                setterFunction = setThrees
                break;
            case 4:
                newObjToManipulate = {...fours}
                setterFunction = setFours
                break;
            case 5:
                newObjToManipulate = {...fives}
                setterFunction = setFives
                break;
            case 6:
                newObjToManipulate = {...sixes}
                setterFunction = setSixes
                break;
            default:
        }

        if (discard) {
            handleDiscard(newObjToManipulate, setterFunction)
        } else {
            newObjToManipulate.score = score
            newObjToManipulate.locked = true
            setterFunction(newObjToManipulate)
        }
    }

    function handleDiscard(diceState, setterFunction) {
        diceState.discarded = true
        setterFunction(diceState)
    }

    function handleScoreChange() {
        handleScoreChosen();
        setBonusSum(ones.score + twos.score + threes.score + fours.score + fives.score + sixes.score);
    }
}

const Context = createContext(null);

export const useBonusContext = () => useContext(Context)