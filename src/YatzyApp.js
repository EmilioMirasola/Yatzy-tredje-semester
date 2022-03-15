import './App.css';
import './components/scoreComponents/bonusScores/bonus.css';
import React, { Fragment } from "react";
import { Dice } from "./views/Dice";
import { BonusScores } from "./views/BonusScores";
import { SpecialScores } from "./views/SpecialScores";
import { Sum } from "./components/scoreComponents/Sum";
import { Highscores } from './components/Highscores';


export const YatzyApp = () => {

    return (
        <Fragment>
            <div className="app">
                <Dice />
                <div className={"grid"}>
                    <h5>Type</h5>
                    <h5>Score</h5>
                    <h5>Possible score</h5>
                    <h5>Remove</h5>
                </div>
                <BonusScores />
                <SpecialScores />
                <Sum />
            </div>
            <Highscores />
        </Fragment>
    );
}


