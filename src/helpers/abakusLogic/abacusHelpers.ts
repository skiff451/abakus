import {CountType, DifficultyType} from "@/types/abacusTypes";


export const getMaxNumber = (difficulty: DifficultyType, count: CountType) => {
    const splitNumber = String(difficulty).split("")
    if (difficulty === 1) {
        return count
    } else {
        const stringDifficulty = splitNumber.map((n, i) => {
            if (i === 0) {
                return count
            } else {
                return 9
            }
        }).join("")
        return Number(stringDifficulty)
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
