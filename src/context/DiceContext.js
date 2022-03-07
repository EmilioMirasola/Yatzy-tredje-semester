import React, {createContext, useContext, useState} from "react";


export const DiceContext = ({children}) => {
    const [diceStates, setDiceStates] = useState([
        createInitDiceState(),
        createInitDiceState(),
        createInitDiceState(),
        createInitDiceState(),
        createInitDiceState()
    ])

    const [hasRolled, setHasRolled] = useState(false)
    const [rollsLeft, setRollsLeft] = useState(3)

    return (
        <Context.Provider value={{
            diceStates,
            rollsLeft,
            handleScoreChosen,
            hasRolled,
            rollDices,
            holdDice,
            releaseDice
        }}>
            {children}
        </Context.Provider>
    )

    function rollDices() {
        if (rollsLeft > 0) {

            const newStateArray = [...diceStates];

            diceStates.forEach((dice, index) => {
                if (!dice.hold) {
                    dice.value = getRandomInt();
                    newStateArray[index] = dice;
                }
            });

            setHasRolled(true)
            setRollsLeft(prevState => prevState - 1)
            setDiceStates(newStateArray);
        }
    }

    function holdDice(diceIndex) {
        const newStateArray = [...diceStates];
        newStateArray[diceIndex].hold = true;

        setDiceStates(newStateArray);
    }

    function releaseDice(diceIndex) {
        const newStateArray = [...diceStates];
        newStateArray[diceIndex].hold = false;

        setDiceStates(newStateArray);
    }

    function handleScoreChosen() {
        const newDiceStateArray = Array.of(createInitDiceState(), createInitDiceState(), createInitDiceState(), createInitDiceState(), createInitDiceState())
        setHasRolled(false)
        setDiceStates(newDiceStateArray)
        setRollsLeft(3)
    }

}

function createInitDiceState() {
    return {
        value: 1,
        hold: false,
    }
}

function getRandomInt() {
    return Math.floor(Math.random() * 6 + 1);
}

export const Context = createContext(undefined);

export const useDiceContext = () => useContext(Context)