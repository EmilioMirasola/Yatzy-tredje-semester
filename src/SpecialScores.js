import {useSpecialScoresContext} from "./context/SpecialScoresContext";
import {DiscardButton} from "./DiscardButton";
import {ScoreBox} from "./ScoreBox";


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
        handleSetTwoPairs,
        handleSetNumberOfSame,
        handleSetFullHouse,
        handleSetSmallStraight,
        handleSetLargeStraight,
        handleSetChance,
        handleSetYatzy
    } = useSpecialScoresContext()

    return (<div>
        {onePairDisplay()}
        {twoPairsDisplay()}
        {threeSameDisplay()}
        {fourSameDisplay()}
        {fullHouseDisplay()}
        {smallStraightDisplay()}
        {largeStraightDisplay()}
        {chanceDisplay()}
        {yatzyDisplay()}
    </div>);

    function onePairDisplay() {
        return <ScoreBox
            onChosen={() => canSetScore(onePair) && handleSetOnePair()}
            discarded={onePair.discarded}
        >
            <div className={shouldApplyUsedClass(onePair) ? "used" : ""}>One pair {onePair.score}</div>
            <DiscardButton onDiscard={() => handleSetOnePair(true)}/>
        </ScoreBox>;
    }

    function twoPairsDisplay() {
        return <ScoreBox
            onChosen={() => canSetScore(twoPairs) && handleSetTwoPairs()}
            discarded={twoPairs.discarded}
        >
            <p className={shouldApplyUsedClass(twoPairs) ? "used" : ""}>Two pairs {twoPairs.score}</p>
            <DiscardButton onDiscard={() => handleSetTwoPairs(true)}/>
        </ScoreBox>;
    }

    function threeSameDisplay() {
        return <ScoreBox
            onChosen={() => canSetScore(threeSame) && handleSetNumberOfSame(3)}
            discarded={threeSame.discarded}
        >
            <p className={shouldApplyUsedClass(threeSame) ? "used" : ""}>Three same {threeSame.score}</p>
            <DiscardButton onDiscard={() => handleSetNumberOfSame(3, true)}/>
        </ScoreBox>;
    }

    function fourSameDisplay() {
        return <ScoreBox
            onChosen={() => canSetScore(fourSame) && handleSetNumberOfSame(4)}
            discarded={fourSame.discarded}
        >
            <p className={shouldApplyUsedClass(fourSame) ? "used" : ""}>Four same {fourSame.score}</p>
            <DiscardButton onDiscard={() => handleSetNumberOfSame(4, true)}/>
        </ScoreBox>;
    }

    function fullHouseDisplay() {
        return <ScoreBox
            onChosen={() => canSetScore(fullHouse) && handleSetFullHouse()}
            discarded={fullHouse.discarded}
        >
            <p className={shouldApplyUsedClass(fullHouse) ? "used" : ""}>Full house {fullHouse.score}</p>
            <DiscardButton onDiscard={() => handleSetFullHouse(true)}/>
        </ScoreBox>;
    }

    function smallStraightDisplay() {
        return <ScoreBox
            onChosen={() => canSetScore(smallStraight) && handleSetSmallStraight()}
            discarded={smallStraight.discarded}
        >
            <p className={shouldApplyUsedClass(smallStraight) ? "used" : ""}>Small straight{smallStraight.score}</p>
            <DiscardButton onDiscard={() => handleSetSmallStraight(true)}/>
        </ScoreBox>;
    }

    function largeStraightDisplay() {
        return <ScoreBox
            onChosen={() => canSetScore(largeStraight) && handleSetLargeStraight()}
            discarded={largeStraight.discarded}
        >
            <p className={shouldApplyUsedClass(largeStraight) ? "used" : ""}>Large straight{largeStraight.score}</p>
            <DiscardButton onDiscard={() => handleSetLargeStraight(true)}/>
        </ScoreBox>;
    }

    function chanceDisplay() {
        return <ScoreBox
            onChosen={() => canSetScore(chance) && handleSetChance()}
            discarded={chance.discarded}
        >
            <p className={shouldApplyUsedClass(chance) ? "used" : ""}>Chance {chance.score}</p>
            <DiscardButton onDiscard={() => handleSetChance(true)}/>
        </ScoreBox>;
    }

    function yatzyDisplay() {
        return <ScoreBox
            onChosen={() => canSetScore(yatzy) && handleSetYatzy()}
            discarded={yatzy.discarded}
        >
            <div className={shouldApplyUsedClass(yatzy) ? "used" : ""}>Yatzy {yatzy.score}</div>
            <DiscardButton onDiscard={() => handleSetYatzy(true)}/>
        </ScoreBox>;
    }
}

function shouldApplyUsedClass(objToCheck) {
    if (objToCheck.discarded) {
        return true;
    } else return objToCheck.score !== 0;
}

function canSetScore(objToCheck) {
    return objToCheck.discarded !== true && objToCheck.score === 0
}