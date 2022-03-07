import {Die} from "./Die";
import React, {Fragment} from "react";
import {useDiceContext} from "./context/DiceContext";

export const Dice = () => {
    const {rollDices, rollsLeft} = useDiceContext();

    return (
        <Fragment>
            <div className="diceContainer">
                <Die index={0} key={0}/>
                <Die index={1} key={1}/>
                <Die index={2} key={2}/>
                <Die index={3} key={3}/>
                <Die index={4} key={4}/>
            <button onClick={rollDices}>Roll</button>
                <h2>Antal rul tilbage {rollsLeft}</h2>
            </div>
        </Fragment>
    )
}