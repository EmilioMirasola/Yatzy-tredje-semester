import {useDiceContext} from "../context/DiceContext";

export const DiscardButton = ({onClick, value, className}) => {
    const {hasRolled} = useDiceContext()
    return (
        <div className={className}>
            <button disabled={value.discarded || value.score !== 0 || !hasRolled} onClick={(e) => {
                e.stopPropagation()
                onClick()
            }}>
                <img width={"20px"} src={"discardImage.png"} alt={"Discard"}/>
            </button>
        </div>
    )
}