import {useState} from "react";

const initState = {
    value: 1,
    hold: false,
}

export const useDice = () => {
    const [diceState, setDiceState] = useState(initState)

    const toggleHold = () => {
        setDiceState({...diceState, hold: !diceState.hold})
    }

    const roll = () => {
        const random = Math.floor(Math.random() * 6 + 1);
        setDiceState({...diceState, value: random})
    }

    return [diceState, toggleHold, roll]
}