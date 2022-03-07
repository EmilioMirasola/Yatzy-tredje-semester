import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {YatzyApp} from './YatzyApp';
import {DiceContext} from "./context/DiceContext";
import {SpecialScoresContext} from "./context/SpecialScoresContext";
import {BonusContext} from "./context/BonusContext";

ReactDOM.render(
    <React.StrictMode>
        <DiceContext>
            <BonusContext>
                <SpecialScoresContext>
                    <YatzyApp/>
                </SpecialScoresContext>
            </BonusContext>
        </DiceContext>
    </React.StrictMode>,
    document.getElementById('root')
);
