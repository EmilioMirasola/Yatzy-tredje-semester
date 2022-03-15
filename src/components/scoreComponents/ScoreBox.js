import { useDiceContext } from "../../context/DiceContext";
import { hasFieldBeenChosenPreviously } from "../../logic/validation/specialScoresValidation";
import { useMemo } from "react";
import styled, { css } from "styled-components";

const Box = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    border-top: 1px solid black;
    padding: 2px;
    
    ${props => props.used && css`
        color: #595959;
        opacity: 50%;
    `}

    ${props => props.isAvailable && css`
        color: #83b9b7;
        cursor: pointer;
    `}

    ${props => props.isDiscarded && css`
        text-decoration: line-through;
        color: #E1795E
    `}
`

export const ScoreBox = ({ onChosen, value, children, isAvailable }) => {
    const { hasRolled } = useDiceContext()
    const hasBeenChosen = useMemo(() => hasFieldBeenChosenPreviously(value), [value])

    return (
        <Box
            onClick={onChosen}
            style={{ color: !hasRolled && !hasBeenChosen ? "black" : null, }}
            isDiscarded={value.discarded}
            used={hasBeenChosen}
            isAvailable={!hasBeenChosen && isAvailable}
        >
            {children}
        </Box>
    )

}