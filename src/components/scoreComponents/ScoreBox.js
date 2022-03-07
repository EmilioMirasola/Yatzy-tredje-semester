import "./ScoreBox.css"
import {useDiceContext} from "../../context/DiceContext";
import {hasFieldBeenChosenPreviously} from "../../logic/specialScoresValidation";

export const ScoreBox = ({onChosen, value, children, isAvailable}) => {
    const {hasRolled} = useDiceContext()

    return (
        <div
            onClick={onChosen}
            style={{color: !hasRolled && value && !hasFieldBeenChosenPreviously(value) ? "black" : null,}}
            className={`
            ${value && value.discarded ? "discarded" : ""} 
            ${value && hasFieldBeenChosenPreviously(value) ? "used" : isAvailable ? "available" : "unavailable"} 
            border grid padding`

            }
        >
            {children}
        </div>
    )

}