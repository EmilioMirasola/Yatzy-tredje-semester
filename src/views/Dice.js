import {Die} from "../components/Die";
import React from "react";
import {useDiceContext} from "../context/DiceContext";

export const Dice = () => {
    const {rollDices, rollsLeft} = useDiceContext();

    return (
        <div>
            <div className="diceContainer">
                <Die index={0} key={0}/>
                <Die index={1} key={1}/>
                <Die index={2} key={2}/>
                <Die index={3} key={3}/>
                <Die index={4} key={4}/>
            </div>
            <div className={"rollContainer"}>
                <h2>Rolls left {rollsLeft}</h2>
                <button className={"button"} onClick={rollDices}>Roll</button>
            </div>
        </div>
    )
}