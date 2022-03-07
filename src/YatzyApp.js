import './App.css';
import './components/scoreComponents/bonusScores/bonus.css';
import React from "react";
import {Dice} from "./views/Dice";
import {BonusScores} from "./views/BonusScores";
import {SpecialScores} from "./views/SpecialScores";
import {useTotalScoreContext} from "./context/TotalScoreContext";


function YatzyApp() {

    const {total} = useTotalScoreContext()

    return (
        <div className="app">
            <Dice/>
            <div>
                <h5>Type</h5>
                <h5>Score</h5>
                <h5>Possible score</h5>
                <h5>Remove</h5>
            </div>
            <BonusScores/>
            <SpecialScores/>
            {total}
        </div>
    );
}

export default YatzyApp;
