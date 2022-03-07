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
        .reduce(((previousValue, currentValue) => currentValue > previousValue ? currentValue : previousValue))
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

export function findFullHouseScore(dice) {
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
    if (!rollIsYatzy(dice)) {
        return null;
    }

    return dice[0].value * 5 + 50

}

export function calculateSmallStraightScore(dice) {
    if (!isSmallStraight(dice)) {
        return null;
    }

    return 15;
}

export function calculateLargeStraightScore(dice) {
    if (!isLargeStraight(dice)) {
        return null;
    }

    return 20;
}

export function calculateChanceScore(dice) {
    const diceValues = mapDiceStateToDiceValueArray(dice);
    return diceValues.reduce((prevValue, currentValue) => prevValue + currentValue, 0)
}

export function mapDiceStateToDiceValueArray(dice) {
    return dice.map(die => die.value)
}


function isSmallStraight(dice) {
    const values = [1, 2, 3, 4, 5]
    return values.every(value => dice.includes(value))
}

function isLargeStraight(dice) {
    const values = [2, 3, 4, 5, 6]
    return values.every(value => dice.includes(value))
}

function rollIsYatzy(dice) {
    const mapped = dice.map(die => die.value)
    return new Set(mapped).size === 1;
}
