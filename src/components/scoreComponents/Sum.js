import React from "react";
import { useBonusContext } from "../../context/BonusContext";
import { useSpecialScoresContext } from "../../context/SpecialScoresContext";
import styled from 'styled-components'

const SumContainer = styled.div`
position: absolute;
width: inherit;
display: flex;
justify-content: space-between;
align-items: center;
`

const BonusAndSumContainer = styled.div`
display: flex;
width: 150px;
justify-content: space-between;
`

const RestartButton = styled.button`
height: 80px;
`

export const Sum = () => {
    const { allBonusScoresSet, bonusSum, resetBonusContext } = useBonusContext()
    const { allSpecialScoresSet, specialScoresSum, resetSpecialScoresContext } = useSpecialScoresContext();

    return (
        <SumContainer>
            <div>
                <BonusAndSumContainer>
                    <h3>
                        Sum: {bonusSum}
                    </h3>

                    <h3>
                        Bonus: {bonusSum >= 63 ? 50 : 0}
                    </h3>
                </BonusAndSumContainer>
                <h1>
                    Total: {specialScoresSum + bonusSum + (bonusSum >= 63 ? 50 : 0)}
                </h1>
            </div>
            {allBonusScoresSet && allSpecialScoresSet && <RestartButton onClick={handleReset}>Start new game</RestartButton>}
        </SumContainer>
    )

    function handleReset() {
        resetBonusContext()
        resetSpecialScoresContext()
    }
}