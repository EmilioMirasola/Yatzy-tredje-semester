export const DiscardButton = ({onClick, value, className}) => {
    return (
        <div className={className}>
            <button disabled={value.discarded || value.score !== 0} onClick={(e) => {
                e.stopPropagation()
                onClick()
            }}>
                <img width={"20px"} src={"discardImage.png"}/>
            </button>
        </div>
    )
}