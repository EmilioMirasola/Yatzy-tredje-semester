import {createContext, useContext, useEffect, useState} from "react";
import {useDiceContext} from "./DiceContext";
import {
    calculateChanceScore,
    calculateLargeStraightScore,
    calculateSmallStraightScore,
    calculateYatzyScore,
    findFullHouseScore,
    findHighestPairValue,
    findLargestOfSameValue,
    findPairs,
    mapDiceStateToDiceValueArray,
    rollIsYatzy
} from "../logic/specialScoresCalculation";

const initState = {
    score: 0, discarded: false,
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

    const {diceStates, handleScoreChosen} = useDiceContext()

    useEffect(handleScoreChange, [onePair, twoPairs, threeSame, fourSame, fullHouse, smallStraight, largeStraight, chance, yatzy])

    return (<Context.Provider value={{
        onePair,
        twoPairs,
        threeSame,
        fourSame,
        fullHouse,
        smallStraight,
        largeStraight,
        chance,
        setChance,
        yatzy,
        handleSetTwoPairs,
        handleSetOnePair,
        handleSetNumberOfSame,
        handleSetSmallStraight,
        handleSetFullHouse,
        handleSetLargeStraight,
        handleSetChance,
        handleSetYatzy,
        specialScoresSum
    }}>
        {children}
    </Context.Provider>)

    function handleScoreChange() {
        setSpecialScoresSum(onePair.score + twoPairs.score + threeSame.score + fourSame.score + fullHouse.score + smallStraight.score + largeStraight.score + chance.score + yatzy.score);
        handleScoreChosen()
    }

    function handleSetOnePair(discard) {
        const newOnePair = {...onePair}
        if (discard) {
            handleDiscard(newOnePair, (obj) => setOnePair(obj))
        } else {
            newOnePair.score = findHighestPairValue(diceStates)
        }
        setOnePair(newOnePair)
    }

    function handleSetTwoPairs(discard) {
        const newTwoPairs = {...twoPairs}
        if (discard) {
            handleDiscard(newTwoPairs, (obj) => setTwoPairs(obj))
        } else {
            const pairs = findPairs(diceStates);

            if (pairs.length > 1) {
                newTwoPairs.score = pairs.reduce((previousValue, currentValue) => previousValue + currentValue[0] * 2, 0)
            }
        }

        setTwoPairs(newTwoPairs)
    }

    function handleSetNumberOfSame(minimumNumberOfSameValue, discard) {
        let newState;
        let setter
        switch (minimumNumberOfSameValue) {
            case 3:
                newState = {...threeSame}
                setter = setThreeSame
                break;
            case 4:
                newState = {...fourSame}
                setter = setFourSame
                break;
            default:
                return
        }

        if (discard) {
            handleDiscard(newState, (obj) => setter(obj))
        } else {
            const largestOfSameValue = findLargestOfSameValue(diceStates, minimumNumberOfSameValue)

            if (largestOfSameValue) {
                newState.score = largestOfSameValue * minimumNumberOfSameValue
            }
        }
        setter(newState)
    }

    function handleSetFullHouse(discard) {
        if (discard) {
            handleDiscard({...discard}, (obj) => setFullHouse(obj))
        } else {

            const score = findFullHouseScore(diceStates)

            const newState = {...fullHouse}
            newState.score = score;

            setFullHouse(newState)
        }
    }

    function handleSetSmallStraight(discard) {
        if (discard) {
            handleDiscard({...discard}, (obj) => setSmallStraight(obj))
        } else {
            const smallStraightScore = calculateSmallStraightScore(mapDiceStateToDiceValueArray(diceStates))
            if (smallStraightScore !== null) {
                const newState = {...smallStraight}
                newState.score = smallStraightScore
                setSmallStraight(newState)
            }
        }
    }

    function handleSetLargeStraight(discard) {
        if (discard) {
            handleDiscard({...discard}, (obj) => setLargeStraight(obj))
        } else {
            const largeStraightScore = calculateLargeStraightScore(mapDiceStateToDiceValueArray(diceStates))
            if (largeStraightScore !== null) {
                const newState = {...largeStraight}
                newState.score = largeStraightScore
                setLargeStraight(newState)
            }
        }
    }

    function handleSetChance(discard) {
        if (discard) {
            handleDiscard({...discard}, (obj) => setChance(obj))
        } else {
            const chanceScore = calculateChanceScore(diceStates);
            const newState = {...chance}
            newState.score = chanceScore
            setChance(newState);
        }
    }

    function handleSetYatzy(discard) {
        if (discard) {
            handleDiscard({...discard}, (obj) => setYatzy(obj))
        } else {
            const yatzyScore = calculateYatzyScore(diceStates)
            if (yatzyScore !== null) {
                const newState = {...yatzy}
                newState.score = yatzyScore
                setYatzy(newState)
            }
        }
    }

    function handleDiscard(obj, setterCallback) {
        obj.discarded = true
        setterCallback(obj)
    }


}

const Context = createContext(null);

export const useSpecialScoresContext = () => useContext(Context)