import { OnePair } from "../components/scoreComponents/specialScores/OnePair";
import { TwoPairs } from "../components/scoreComponents/specialScores/TwoPairs";
import { ThreeSame } from "../components/scoreComponents/specialScores/ThreeSame";
import { FourSame } from "../components/scoreComponents/specialScores/FourSame";
import { FullHouse } from "../components/scoreComponents/specialScores/FullHouse";
import { SmallStraight } from "../components/scoreComponents/specialScores/SmallStraight";
import { LargeStraight } from "../components/scoreComponents/specialScores/LargeStraight";
import { Chance } from "../components/scoreComponents/specialScores/Chance";
import { Yatzy } from "../components/scoreComponents/specialScores/Yatzy";
import { Fragment } from "react";


export const SpecialScores = ({ onSumChange }) => {

    return (
        <Fragment>
            <OnePair onChosen={handleChosen} />
            <TwoPairs onChosen={handleChosen} />
            <ThreeSame onChosen={handleChosen} />
            <FourSame onChosen={handleChosen} />
            <FullHouse onChosen={handleChosen} />
            <SmallStraight onChosen={handleChosen} />
            <LargeStraight onChosen={handleChosen} />
            <Chance onChosen={handleChosen} />
            <Yatzy onChosen={handleChosen} />
        </Fragment>);

    function handleChosen(score) {
        onSumChange(score)
    }

}



