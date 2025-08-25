export const getMaxNumberToDifficulty = (difficulty: number) => {
    switch (difficulty) {
        case 1:
            return 9;
        case 2:
            return 99;
        case 3:
            return 999;
        case 4:
            return 9999;
    }
}

export const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const splitDigits = (num: number) => {
    return String(num).split("").map(Number);
}

export const randomOperation = (operations) => {
    return operations[Math.floor(Math.random() * operations.length)]
}

export const reverseAbacus = (abacus) => {
    return abacus.map((i) => (i.reverse()))
}
