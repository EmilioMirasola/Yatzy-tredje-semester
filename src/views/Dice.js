import { Die } from "../components/Die";
import React from "react";
import { useDiceContext } from "../context/DiceContext";
import styled from "styled-components"

const DiceContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const RollContainer = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
`

const Button = styled.button`
    width: 150px;
`

export const Dice = () => {
    const { rollDices, rollsLeft } = useDiceContext();

    return (
        <div>
            <DiceContainer >
                <Die index={0} key={0} />
                <Die index={1} key={1} />
                <Die index={2} key={2} />
                <Die index={3} key={3} />
                <Die index={4} key={4} />
            </DiceContainer>
            <RollContainer>
                <h2>Rolls left {rollsLeft}</h2>
                <Button onClick={rollDices}>Roll</Button>
            </RollContainer>
        </div>
    )
}