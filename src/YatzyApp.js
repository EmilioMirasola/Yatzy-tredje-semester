import './App.css';
import React from "react";
import {AllDice} from "./AllDice";
import {Bonus} from "./Bonus";
import {SpecialScores} from "./SpecialScores";

function YatzyApp() {

    return (
        <div className="app">
            <AllDice/>
            <Bonus/>
            <SpecialScores/>
        </div>
    );
}

export default YatzyApp;
