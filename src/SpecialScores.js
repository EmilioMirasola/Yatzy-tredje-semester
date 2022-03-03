import {useSpecialScoresContext} from "./context/SpecialScoresContext";


export const SpecialScores = () => {
    const {
        onePair,
        twoPairs,
        threeSame,
        fourSame,
        fullHouse,
        smallStraight,
        largeStraight,
        chance,
        yatzy,
        handleSetOnePair,
        handleSetTwoPairs
    } = useSpecialScoresContext()
    return (
        <div>
            <div
                key={1}
                onClick={() => !onePair.locked && handleSetOnePair()}>
                <p className={onePair.locked ? "locked" : ""}>One pair {onePair.value}</p>
            </div>

            <div
                key={2}
                onClick={() => !twoPairs.locked && handleSetTwoPairs()}>
                <p className={twoPairs.locked ? "locked" : ""}>Two pairs {twoPairs.value}</p>
            </div>

            <div
                key={3}
                onClick={() => !threeSame.locked && handleSetChosenDiceValue(3)}>
                <p className={threeSame.locked ? "locked" : ""}>Three same {threeSame.value}</p>
            </div>

            <div
                key={4}
                onClick={() => !fourSame.locked && handleSetChosenDiceValue(4)}>
                <p className={fourSame.locked ? "locked" : ""}>Forur same {fourSame.value}</p>
            </div>

            <div
                key={5}
                onClick={() => !fullHouse.locked && handleSetChosenDiceValue(5)}>
                <p className={fullHouse.locked ? "locked" : ""}>Five same {fullHouse.value}</p>
            </div>

            <div
                key={6}
                onClick={() => !smallStraight.locked && handleSetChosenDiceValue(6)}>
                <p className={smallStraight.locked ? "locked" : ""}>Six same {smallStraight.value}</p>
            </div>

            <div
                key={7}
                onClick={() => !largeStraight.locked && handleSetChosenDiceValue(6)}>
                <p className={largeStraight.locked ? "locked" : ""}>6-s {largeStraight.value}</p>
            </div>

            <div
                key={8}
                onClick={() => !chance.locked && handleSetChosenDiceValue(6)}>
                <p className={chance.locked ? "locked" : ""}>6-s {chance.value}</p>
            </div>

            <div
                key={9}
                onClick={() => !yatzy.locked && handleSetChosenDiceValue(6)}>
                <p className={yatzy.locked ? "locked" : ""}>6-s {yatzy.value}</p>
            </div>

        </div>
    );
}