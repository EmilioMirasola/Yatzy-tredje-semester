import {useDiceContext} from "./context/DiceContext";
import "./dice.css"
import {Fragment} from "react";

export const Dice = ({index}) => {
    const {diceStates, holdDice, releaseDice} = useDiceContext()

    return (
        <Fragment>
            <div className={`dice ${isDiceBeingHold() ? "hold " : ""}`} onClick={handleHold}>
                <h1>
                    {diceStates[index].value}
                </h1>
            </div>
        </Fragment>
    )

    function handleHold() {
        if (isDiceBeingHold()) {
            releaseDice(index)
        } else {
            holdDice(index)
        }
    }

    function isDiceBeingHold() {
        return diceStates[index].hold;
    }

}