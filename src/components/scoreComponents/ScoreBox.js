import "./ScoreBox.css"

export const ScoreBox = ({onChosen, discarded, children, style}) => {

    return (
        <div style={style} className={`${discarded ? "discarded" : ""}`} onClick={onChosen}>
            {children}
        </div>
    )

}