export const DiscardButton = ({onDiscard}) => {
    return (<button onClick={(e) => {
        e.stopPropagation()
        onDiscard()
    }}>
        <img width={"20px"} src={"discardImage.png"}/>
    </button>)
}