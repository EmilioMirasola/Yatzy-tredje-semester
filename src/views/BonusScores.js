import { Fragment, useState, useEffect } from "react";
import "../components/scoreComponents/bonusScores/bonus.css";
import { Fives } from "../components/scoreComponents/bonusScores/Fives";
import { Fours } from "../components/scoreComponents/bonusScores/Fours";
import { Ones } from "../components/scoreComponents/bonusScores/Ones";
import { Sixes } from "../components/scoreComponents/bonusScores/Sixes";
import { Threes } from "../components/scoreComponents/bonusScores/Threes";
import { Twos } from "../components/scoreComponents/bonusScores/Twos";

export const BonusScores = ({onSumChange}) => {
    const [sum, setSum] = useState(0)

    useEffect(() => onSumChange(sum), [sum])
    
    return (
        <Fragment>
            <Ones onChosen={handleChosen} />
            <Twos onChosen={handleChosen} />
            <Threes onChosen={handleChosen} />
            <Fours onChosen={handleChosen} />
            <Fives onChosen={handleChosen} />
            <Sixes onChosen={handleChosen} />
            <div style={{display: "flex"}}>
                <div style={{paddingRight: "10px"}}>Sum: {sum}</div>
                <div>Bonus: {sum >= 63 ? 50 : 0}</div>
            </div>
        </Fragment>
    );

    function handleChosen(score) {
        setSum(prevState => prevState + score)
    }
}