import {useDiceContext} from "../context/DiceContext";
import "../views/dice.css"
import {Fragment} from "react";

export const Die = ({index}) => {
    const {diceStates, toggleHold, hasRolled} = useDiceContext()

    return (
        <Fragment>
            <div className={`dice ${isDiceBeingHold() ? "hold " : "released"}`} onClick={() => toggleHold(index)}>
                <h1>
                    {!hasRolled ? "?" : diceStates[index].value}
                </h1>
            </div>
        </Fragment>
    )

    function isDiceBeingHold() {
        return diceStates[index].hold;
    }

}