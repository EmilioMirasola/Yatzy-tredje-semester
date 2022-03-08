import "./ScoreBox.css"
import {useDiceContext} from "../../context/DiceContext";
import {hasFieldBeenChosenPreviously} from "../../logic/validation/specialScoresValidation";
import {useMemo} from "react";

export const ScoreBox = ({onChosen, value, children, isAvailable}) => {
    const {hasRolled} = useDiceContext()
    const hasBeenChosen = useMemo(() => hasFieldBeenChosenPreviously(value), [value])

    return (
        <div
            onClick={onChosen}
            style={{color: !hasRolled && !hasBeenChosen ? "black" : null,}}
            className={`
            ${value.discarded && "discarded"} 
            ${hasBeenChosen && "used"} 
            ${!hasBeenChosen && isAvailable && "available"} 
            ${!hasBeenChosen && isAvailable && "cursor"}
            border grid padding`
            }
        >
            {children}
        </div>
    )

}