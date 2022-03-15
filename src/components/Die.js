import { useDiceContext } from "../context/DiceContext";
import { Fragment } from "react";
import styled, { css } from "styled-components"

const DieBox = styled.div`
    text-align: center;
    height: 100px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 5px solid #83b9b7;

    ${props => props.isDiceBeingHold && css`
        border: 5px solid black;
    `}

    ${props => props.cursorAsPointer && css`
        cursor: pointer;
    `}
`

export const Die = ({ index }) => {
    const { diceStates, toggleHold, hasRolled } = useDiceContext()

    return (
        <Fragment>
            <DieBox
                isDiceBeingHold={isDiceBeingHold()}
                cursorAsPointer={hasRolled}
                onClick={() => hasRolled && toggleHold(index)}>
                <h1>
                    {!hasRolled ? "?" : diceStates[index].value}
                </h1>
            </DieBox>
        </Fragment>
    )

    function isDiceBeingHold() {
        return diceStates[index].hold;
    }

}