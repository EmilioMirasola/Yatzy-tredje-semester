import { Ones } from "../components/scoreComponents/bonusScores/Ones";
import { Twos } from "../components/scoreComponents/bonusScores/Twos";
import { Threes } from "../components/scoreComponents/bonusScores/Threes";
import { Fours } from "../components/scoreComponents/bonusScores/Fours";
import { Fives } from "../components/scoreComponents/bonusScores/Fives";
import { Sixes } from "../components/scoreComponents/bonusScores/Sixes";
import { Fragment } from "react";

export const BonusScores = () => {

    return (
        <Fragment>
            <Ones />
            <Twos />
            <Threes />
            <Fours />
            <Fives />
            <Sixes />
        </Fragment>
    );
}