import {Abacus} from "@/helpers/abakusLogic/abakus";

import {
    getMaxNumberToDifficulty,
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

type Op = '+' | '-';
type Token = Op | number;

export const createAbacusDirectCountExercise = (count: number, amount: number, difficulty: number): Token[] => {
    const exercise: Token[] = []
    const abacus = new Abacus().abacus
    const reversedAbacus = reverseAbacus(abacus)

    for (let i = 0; i < amount; i++) {
        while (true) {
            const number = randomNumber(count, getMaxNumberToDifficulty(difficulty))
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
