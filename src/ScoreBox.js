import "./ScoreBox.css"

export const ScoreBox = ({onChosen, discarded, children}) => {

    return (
        <div className={`scoreBoxDiv ${discarded ? "discarded" : ""}`} onClick={onChosen}>
            {children}
        </div>
    )

}