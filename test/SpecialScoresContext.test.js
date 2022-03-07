import {findFullHouseScore, mapDicesToCount} from "../src/logic/specialScoresCalculation";

describe("Yatzy calculation methods", () => {

    test("Tests full house calculation", () => {
        const score = findFullHouseScore([1, 1, 1, 5, 5])

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
