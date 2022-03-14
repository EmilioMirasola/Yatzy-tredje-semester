import { Die } from "../components/Die";
import React, { useState } from "react";

export const Dice = () => {
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
        <div>
            <div className="diceContainer">
                {diceStates.map((state, index) => {
                    return <Die 
                    state={state} 
                    toggleHold={() => toggleHold(index)} 
                    hasRolled={hasRolled}
                    />
                })}
            </div>
            <div className={"rollContainer"}>
                <h2>Rolls left {rollsLeft}</h2>
                <button className={"button"} onClick={roll}>Roll</button>
            </div>
        </div>
    )

    function toggleHold(index) {
        const newDiceState = [...diceStates]
        newDiceState[index].hold = !newDiceState[index].hold

        setDiceStates(newDiceState)
    }

    function roll() {
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
}

function getRandomInt() {
    return Math.floor(Math.random() * 6 + 1);
}

function createInitDiceState() {
    return {
        value: 1,
        hold: false,
    }
}