import React, {createContext, useContext, useEffect, useState} from "react";
import {useDiceContext} from "./DiceContext";

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

    const {diceStates, handleScoreChosen, hasRolled} = useDiceContext()

    useEffect(handleScoreChange, [ones, twos, threes, fours, fives]);

    return (<Context.Provider value={{
        ones,
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

    function handleSetChosenDiceValue(diceValue) {
        if (hasRolled) {


            const numberOfDiceMatching = diceStates.filter(dice => dice.value === diceValue)
            const score = numberOfDiceMatching.length * diceValue

            let newObjToManipulate;
            let setter;

            switch (diceValue) {
                case 1:
                    newObjToManipulate = {...ones}
                    setter = setOnes
                    break;
                case 2:
                    newObjToManipulate = {...twos}
                    setter = setTwos
                    break;
                case 3:
                    newObjToManipulate = {...threes}
                    setter = setThrees
                    break;
                case 4:
                    newObjToManipulate = {...fours}
                    setter = setFours
                    break;
                case 5:
                    newObjToManipulate = {...fives}
                    setter = setFives
                    break;
                case 6:
                    newObjToManipulate = {...sixes}
                    setter = setSixes
                    break;
                default:
            }

            newObjToManipulate.score = score
            newObjToManipulate.locked = true
            setter(newObjToManipulate)
        }
    }

    function handleScoreChange() {
        handleScoreChosen();
        setBonusSum(ones.score + twos.score + threes.score + fours.score + fives.score + sixes.score);
    }
}

const Context = createContext(null);

export const useBonusContext = () => useContext(Context)