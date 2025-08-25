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
        default:
            throw new Error("invalid difficulty")
    }
}

export const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const splitDigits = (num: number) => {
    return String(num).split("").map(Number);
}

export const randomOperation = (operations: string[]) => {
    return operations[Math.floor(Math.random() * operations.length)]
}

export const reverseAbacus = (abacus: number[][]) => {
    return abacus.map((i) => (i.reverse()))
}
