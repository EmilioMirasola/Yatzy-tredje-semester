import {createContext, useContext, useEffect, useState} from "react";
import {useDiceContext} from "./DiceContext";

const initState = {
    value: 0,
    locked: false,
    discarded: false,
}

export const SpecialScoresContext = ({children}) => {
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

    const {diceStates} = useDiceContext()

    useEffect(handleSetSum, [
        onePair,
        twoPairs,
        threeSame,
        fourSame,
        fullHouse,
        smallStraight,
        largeStraight,
        chance,
        yatzy])

    return (
        <Context.Provider value={{
            onePair, handleSetOnePair,
            twoPairs, handleSetTwoPairs,
            threeSame, setThreeSame,
            fourSame, setFourSame,
            fullHouse, setFullHouse,
            smallStraight, setSmallStraight,
            largeStraight, setLargeStraight,
            chance, setChance,
            yatzy, setYatzy,
            specialScoresSum
        }}>
            {children}
        </Context.Provider>
    )

    function handleSetSum() {
        setSpecialScoresSum(onePair.value + twoPairs.value + threeSame.value + fourSame.value + fullHouse.value + smallStraight.value + largeStraight.value + chance.value + yatzy.value);
    }

    function handleSetOnePair() {
        const newOnePair = {...onePair}
        const pairs = findPairs();
        const highestPair = Math.max(...pairs.keys())
        newOnePair.value = highestPair * 2

        setOnePair(newOnePair)
    }

    function handleSetTwoPairs() {
        const newTwoPairs = {...twoPairs}
        const pairs = findPairs();
        let highest = 0;
        let secondHighest = 0;

        if (pairs.size > 1) {
            for (const [key] of pairs) {
                if (key > highest) {
                    highest = key;
                } else if (key > secondHighest) {
                    secondHighest = key;
                }
            }

            newTwoPairs.value = highest * 2 + secondHighest * 2
            setTwoPairs(newTwoPairs)
        }
    }

    function findPairs() {
        const counterMap = new Map()

        for (const dice of diceStates) {
            if (!counterMap.has(dice.value)) {
                counterMap.set(dice.value, 1)
            } else {
                counterMap.set(dice.value, counterMap.get(dice.value) + 1)
            }
        }

        for (const [key, count] of counterMap) {
            if (count < 2) {
                counterMap.delete(key);
            }
        }


        return counterMap
    }

    function handleSetNumberOfSame(minimumNumberOfSameValue) {
        const largestOfSameValue = findLargestOfSameValue(minimumNumberOfSameValue)

        if (largestOfSameValue) {
            let score;
            let setter
            switch (minimumNumberOfSameValue) {
                case 3:
                    score = largestOfSameValue * 3
                    setter = setThreeSame
                    break;
                case 4:
                    score = largestOfSameValue * 4
                    setter = setFourSame
                default:
                    setter = () => undefined
                    score = 0
            }
        }
        setter(score)
    }

    function findLargestOfSameValue(minimumNumberOfSameValue) {
        const counterMap = new Map()

        for (const dice of diceStates) {
            if (!counterMap.has(dice.value)) {
                counterMap.set(dice.value, 1)
            } else {
                counterMap.set(dice.value, counterMap.get(dice.value) + 1)
            }
        }

        for (const [key, count] of counterMap) {
            if (count < minimumNumberOfSameValue) {
                counterMap.delete(key);
            }
        }

        if (counterMap.size > 0) {
            return Math.max({...counterMap.keys()});
        }

        return null
    }
}

const Context = createContext(null);

export const useSpecialScoresContext = () => useContext(Context)