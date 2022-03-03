import {Dice} from "./Dice";
import React, {Fragment} from "react";
import {useDiceContext} from "./context/DiceContext";

export const AllDice = () => {
    const {rollDices} = useDiceContext();

    return (
        <Fragment>
            <div className="diceContainer">
                <Dice index={0} key={0}/>
                <Dice index={1} key={1}/>
                <Dice index={2} key={2}/>
                <Dice index={3} key={3}/>
                <Dice index={4} key={4}/>
            </div>
            <button onClick={() => rollDices()}>Roll</button>
        </Fragment>
    )

}