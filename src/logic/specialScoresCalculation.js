import {validateLargeStraight, validateSmallStraight, validateYatzy, validateTwoPairs} from "./specialScoresValidation";

export function mapDicesToCount(dice) {
    const countMap = new Map()

    dice.forEach(die => {
        if (countMap.has(die.value)) {
            countMap.set(die.value, countMap.get(die.value) + 1)
        } else {
            countMap.set(die.value, 1)
        }
    })

    return countMap
}

export function findPairs(dice) {
    const counterMap = mapDicesToCount(dice)
    return Array.from(counterMap.entries()).filter(e => e[1] >= 2)
}

export function findHighestPairValue(dices) {
    return findPairs(dices)
        .map(entry => entry[0] * 2)
        .reduce(((previousValue, currentValue) => currentValue > previousValue ? currentValue : previousValue), 0)
}


export function findLargestOfSameValue(dice, minimumNumberOfSameValue) {
    const counterMap = mapDicesToCount(dice)

    for (const [key, count] of counterMap) {
        if (count < minimumNumberOfSameValue) {
            counterMap.delete(key);
        }
    }

    if (counterMap.size > 0) {
        return Math.max(Array.from(counterMap.keys()));
    }

    return null
}

export function calculateLargestOfSameValueScore(dice, minimumNumberOfSameValue) {
    const largestOfSameValue = findLargestOfSameValue(dice, minimumNumberOfSameValue)

    if (largestOfSameValue) {
        return largestOfSameValue * minimumNumberOfSameValue
    }

    return null
}

export function calculateFullHouseScore(dice) {
    const countMap = mapDicesToCount(dice)

    if (countMap.size === 2) {
        const counts = Array.from(countMap.values())
        if (counts.includes(2) && counts.includes(3)) {
            const diceValuesInFullHouse = Array.from(countMap.keys())

            return diceValuesInFullHouse.reduce((previousValue, diceValue) => previousValue + countMap.get(diceValue) * diceValue, 0);
        }
    }

    return 0;
}

export function calculateYatzyScore(dice) {
    if (!validateYatzy(dice)) {
        return null;
    }

    return dice[0].value * 5 + 50

}

export function calculateSmallStraightScore() {
    return 15;
}

export function calculateLargeStraightScore(dice) {
    return 20;
}

export function calculateChanceScore(dice) {
    const diceValues = mapDiceStateToDiceValueArray(dice);
    return diceValues.reduce((prevValue, currentValue) => prevValue + currentValue, 0)
}

export function calculateTwoPairsScore(dice) {
    if (validateTwoPairs(dice)) {
        const pairs = findPairs(dice)
        return pairs.reduce((previousValue, currentValue) => previousValue + currentValue[0] * 2, 0)
    }

    return null
}

export function mapDiceStateToDiceValueArray(dice) {
    return dice.map(die => die.value)
}
