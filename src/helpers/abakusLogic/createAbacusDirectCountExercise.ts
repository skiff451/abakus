import {Abacus} from "@/helpers/abakusLogic/abakus";

import {
    getMaxNumber,
    randomNumber,
    randomOperation,
    reverseAbacus,
    splitDigits
} from "@/helpers/abakusLogic/abacusHelpers";
import {operations} from "@/helpers/abakusLogic/abacusOperations";
import {
    addNumberToReverseAbacus,
    checkIsAllowedAddNumber
} from "@/helpers/abakusLogic/abakusDirectCountOperations/addOperations";
import {
    checkIsAllowedSubNumber,
    subNumberToReverseAbacus
} from "@/helpers/abakusLogic/abakusDirectCountOperations/subOperations";
import {CountType, DifficultyType, Token} from "@/types/abacusTypes";



export const createAbacusDirectCountExercise = (count: CountType, amount: number, difficulty: DifficultyType): Token[] => {
    const exercise: Token[] = []
    const abacus = new Abacus().abacus
    const reversedAbacus = reverseAbacus(abacus)

    for (let i = 0; i < amount; i++) {
        while (true) {
            const number = randomNumber(1, getMaxNumber(difficulty, count))
            const digits = splitDigits(number)
            const operation = randomOperation(operations)

            if (operation === "+" && checkIsAllowedAddNumber(digits, reversedAbacus)) {
                exercise.push(operation)
                exercise.push(number)
                addNumberToReverseAbacus(digits, reversedAbacus)
                break
            }

            if (operation === "-" && checkIsAllowedSubNumber(digits, reversedAbacus)) {
                exercise.push(operation)
                exercise.push(number)
                subNumberToReverseAbacus(digits, reversedAbacus)
                break
            }
        }
    }
    return exercise
}
