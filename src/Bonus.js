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
        <div>
            <div
                key={1}
                onClick={() => !ones.locked && handleSetChosenDiceValue(1)}>
                <p className={ones.locked ? "locked" : ""}>1-s {ones.value}</p>
            </div>

            <div
                key={2}
                onClick={() => !twos.locked && handleSetChosenDiceValue(2)}>
                <p className={twos.locked ? "locked" : ""}>2-s {twos.value}</p>
            </div>

            <div
                key={3}
                onClick={() => !threes.locked && handleSetChosenDiceValue(3)}>
                <p className={threes.locked ? "locked" : ""}>3-s {threes.value}</p>
            </div>

            <div
                key={4}
                onClick={() => !fours.locked && handleSetChosenDiceValue(4)}>
                <p className={fours.locked ? "locked" : ""}>4-s {fours.value}</p>
            </div>

            <div
                key={5}
                onClick={() => !fives.locked && handleSetChosenDiceValue(5)}>
                <p className={fives.locked ? "locked" : ""}>5-s {fives.value}</p>
            </div>

            <div
                key={6}
                onClick={() => !sixes.locked && handleSetChosenDiceValue(6)}>
                <p className={sixes.locked ? "locked" : ""}>6-s {sixes.value}</p>
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