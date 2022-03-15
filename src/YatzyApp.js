import React, { Fragment } from "react";
import { Dice } from "./views/Dice";
import { BonusScores } from "./views/BonusScores";
import { SpecialScores } from "./views/SpecialScores";
import { Sum } from "./components/scoreComponents/Sum";
import { Highscores } from './components/Highscores';
import styled from "styled-components"

const App = styled.div`
    padding-top: 10px;
    width: 35%;
    margin: auto;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`

export const YatzyApp = () => {

    return (
        <Fragment>
            <App>
                <Dice />
                <Grid>
                    <h5>Type</h5>
                    <h5>Score</h5>
                    <h5>Possible score</h5>
                    <h5>Remove</h5>
                </Grid>
                <BonusScores />
                <SpecialScores />
                <Sum />
            </App>
            <Highscores />
        </Fragment>
    );
}


