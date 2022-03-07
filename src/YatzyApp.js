import './App.css';
import React from "react";
import {Dice} from "./Dice";
import {Bonus} from "./Bonus";
import {SpecialScores} from "./SpecialScores";

function YatzyApp() {

    return (
        <div className="app">
            <Dice/>
            <Bonus/>
            <SpecialScores/>
        </div>
    );
}

export default YatzyApp;
