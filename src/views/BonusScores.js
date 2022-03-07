import {useBonusContext} from "../context/BonusContext";
import "../components/scoreComponents/bonusScores/bonus.css"
import {Ones} from "../components/scoreComponents/bonusScores/Ones";
import {Twos} from "../components/scoreComponents/bonusScores/Twos";
import {Threes} from "../components/scoreComponents/bonusScores/Threes";
import {Fours} from "../components/scoreComponents/bonusScores/Fours";
import {Fives} from "../components/scoreComponents/bonusScores/Fives";
import {Sixes} from "../components/scoreComponents/bonusScores/Sixes";
import {Fragment} from "react";

export const BonusScores = () => {
    const {bonusSum} = useBonusContext()

    return (
        <Fragment>
            <Ones/>
            <Twos/>
            <Threes/>
            <Fours/>
            <Fives/>
            <Sixes/>

            <div>
                <div>
                    <div>
                        Sum: {bonusSum}
                    </div>

                    <div>
                        Bonus: {bonusSum >= 63 ? 50 : 0}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}