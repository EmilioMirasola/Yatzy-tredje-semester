import {useBonusContext} from "./context/BonusContext";
import "./bonus.css"

export const Bonus = () => {
    const {
        ones,
        twos,
        threes,
        fours,
        fives,
        sixes,
        bonusSum,
        handleSetChosenDiceValue
    } = useBonusContext()

    return (
        <div className={"grid"}>
            <div
                key={1}
                onClick={() => !ones.locked && handleSetChosenDiceValue(1)}>
                <p className={ones.locked ? "used" : ""}>1-s {ones.score}</p>
            </div>

            <div
                key={2}
                onClick={() => !twos.locked && handleSetChosenDiceValue(2)}>
                <p className={twos.locked ? "used" : ""}>2-s {twos.score}</p>
            </div>

            <div
                key={3}
                onClick={() => !threes.locked && handleSetChosenDiceValue(3)}>
                <p className={threes.locked ? "used" : ""}>3-s {threes.score}</p>
            </div>

            <div
                key={4}
                onClick={() => !fours.locked && handleSetChosenDiceValue(4)}>
                <p className={fours.locked ? "used" : ""}>4-s {fours.score}</p>
            </div>

            <div
                key={5}
                onClick={() => !fives.locked && handleSetChosenDiceValue(5)}>
                <p className={fives.locked ? "used" : ""}>5-s {fives.score}</p>
            </div>

            <div
                key={6}
                onClick={() => !sixes.locked && handleSetChosenDiceValue(6)}>
                <p className={sixes.locked ? "used" : ""}>6-s {sixes.score}</p>
            </div>

            <div>
                Sum: {bonusSum}
            </div>

            <div>
                Bonus: {bonusSum >= 63 ? 50 : 0}
            </div>
        </div>
    );
}