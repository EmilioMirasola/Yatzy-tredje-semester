import React, {createContext, useContext, useState} from "react";


export const DiceContext = ({children}) => {
    const [diceStates, setDiceStates] = useState([
        createInitDiceState(0),
        createInitDiceState(1),
        createInitDiceState(2),
        createInitDiceState(3),
        createInitDiceState(4)
    ])

    return (
        <Context.Provider value={{
            diceStates,
            rollDices,
            holdDice,
            releaseDice
        }}>
            {children}
        </Context.Provider>
    )

    function rollDices() {
        const dicesToRoll = diceStates.filter(dice => !dice.hold);
        const newStateArray = [...diceStates];

        dicesToRoll.forEach(dice => {
            dice.value = getRandomInt();
            newStateArray[dice.index] = dice;
        });

        setDiceStates(newStateArray);
    }

    function holdDice(diceIndex) {
        const newStateArray = [...diceStates];
        console.log(newStateArray)
        console.log(diceIndex)
        newStateArray[diceIndex].hold = true;

        setDiceStates(newStateArray);
    }

    function releaseDice(diceIndex) {
        const newStateArray = [...diceStates];
        newStateArray[diceIndex].hold = false;

        setDiceStates(newStateArray);
    }

}

function createInitDiceState(index) {
    return {
        value: 1,
        hold: false,
        index: index
    }
}

function getRandomInt() {
    return Math.floor(Math.random() * 6 + 1);
}

export const Context = createContext(undefined);

export const useDiceContext = () => useContext(Context)