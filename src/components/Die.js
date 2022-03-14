import "../views/dice.css"
import { Fragment } from "react";

export const Die = ({ state, toggleHold, hasRolled }) => {

    return (
        <Fragment>
            <div className={`dice ${state.hold ? "hold " : "released"}`} onClick={toggleHold}>
                <h1>
                    {!hasRolled ? "?" : state.value}
                </h1>
            </div>
        </Fragment>
    )
}