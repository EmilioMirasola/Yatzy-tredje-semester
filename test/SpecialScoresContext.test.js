import {calculateFullHouseScore, mapDicesToCount} from "../src/logic/calculation/specialScoresCalculation";

describe("Yatzy calculation methods", () => {

    test("Tests full house calculation", () => {
        const score = calculateFullHouseScore([1, 1, 1, 5, 5])

        expect(score).toBe(13);
    })

    test("mapDicesToCount", () => {
        const counterMap = mapDicesToCount([1, 1, 1, 5, 5])
        expect(counterMap).toBe({
            1: 3,
            5: 2
        })
    })
})
