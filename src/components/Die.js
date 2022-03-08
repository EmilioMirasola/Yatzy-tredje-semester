import "../views/dice.css"
import {Fragment} from "react";


export const Die = ({toggleHold, index, state, hasRolled}) => {

    return (
        <Fragment>
            <div className={`dice ${state[index].hold ? "hold " : "released"}`} onClick={() => toggleHold(index)}>
                <h1>
                    {!hasRolled ? "?" : state[index].value}
                </h1>
            </div>
        </Fragment>
    )


}