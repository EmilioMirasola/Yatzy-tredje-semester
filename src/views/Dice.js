import {Die} from "../components/Die";
import React, {useState} from "react";
import {getRandomInt} from "../logic/calculation/misc";

const initState = {
    value: 1, hold: false,
}

export const Dice = () => {
    const [rollsLeft, setRollsLeft] = useState(3)
    const [hasRolled, setHasRolled] = useState(false)
    const [diceStates, setDiceStates] = useState([initState, initState, initState, initState, initState])

    return (
        <div>
            <div className="diceContainer">
                <Die toggleHold={toggleHold} index={0} state={diceStates} hasRolled={hasRolled}/>
                <Die toggleHold={toggleHold} index={1} state={diceStates} hasRolled={hasRolled}/>
                <Die toggleHold={toggleHold} index={2} state={diceStates} hasRolled={hasRolled}/>
                <Die toggleHold={toggleHold} index={3} state={diceStates} hasRolled={hasRolled}/>
                <Die toggleHold={toggleHold} index={4} state={diceStates} hasRolled={hasRolled}/>
            </div>
            <div className={"rollContainer"}>
                <h2>Rolls left {rollsLeft}</h2>
                <button className={"button"} onClick={roll}>Roll</button>
            </div>
        </div>
    )

    function toggleHold(index) {
        const newHold = !diceStates[index].hold
        const newState = [...diceStates]
        newState[index].hold = newHold

        setDiceStates(newState)
    }

    function roll() {
        if (rollsLeft > 0) {
            const randomInts = Array.from({length: 5}, () => getRandomInt())

            const newState = randomInts.map((int, index) => {
                const newState = {...diceStates[index]}
                newState.value = int
                return newState
            })

            setDiceStates(newState)
            setRollsLeft(rollsLeft - 1)
            setHasRolled(true)
        }
    }


}