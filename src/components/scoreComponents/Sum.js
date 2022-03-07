import React from "react";
import {useBonusContext} from "../../context/BonusContext";
import {useSpecialScoresContext} from "../../context/SpecialScoresContext";

export const Sum = () => {
    const {bonusSum} = useBonusContext()
    const {specialScoresSum} = useSpecialScoresContext();

    return (
        <div className={"sumContainer"}>
            <div className={"bonusAndSumContainer"}>
                <h3>
                    Sum: {bonusSum}
                </h3>

                <h3>
                    Bonus: {bonusSum >= 63 ? 50 : 0}
                </h3>
            </div>
            <h1>
                Total: {specialScoresSum + bonusSum + (bonusSum >= 63 ? 50 : 0)}
            </h1>
        </div>)
}