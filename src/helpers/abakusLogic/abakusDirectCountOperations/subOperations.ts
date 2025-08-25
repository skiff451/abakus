import {MAX_ABACUS_COLUMN_LOWER_NUM, MAX_ABACUS_COLUMN_UPPER_NUM} from "@/helpers/abakusLogic/abacusConstants";
import {abacusColumnGuards} from "@/helpers/abakusLogic/abacusColumnGuards";

export const subDigitToReversedAbacus = (index: number, num: number, reversedAbacus: number[][]) => {
    const upperDeck = 0;
    const lowerDeck = 1;
    if (num <= MAX_ABACUS_COLUMN_LOWER_NUM) {
        reversedAbacus[lowerDeck][index] -= num
    } else if (num === MAX_ABACUS_COLUMN_UPPER_NUM) {
        reversedAbacus[upperDeck][index] -= num
    } else {
        reversedAbacus[lowerDeck][index] -= num % MAX_ABACUS_COLUMN_UPPER_NUM
        reversedAbacus[upperDeck][index] -= MAX_ABACUS_COLUMN_UPPER_NUM
    }
}

export const checkIsAllowedSubDigit = (num: number, upperNum: number, lowerNum: number) => {
    abacusColumnGuards(num, upperNum, lowerNum)

    if (num < MAX_ABACUS_COLUMN_UPPER_NUM && lowerNum < num) {//can sub only available quantity in lower deck
        return false
    } else if (num === MAX_ABACUS_COLUMN_UPPER_NUM && upperNum !== num) { //can sub only if upper deck has '5'
        return false
    } else if (num > MAX_ABACUS_COLUMN_UPPER_NUM) {
        const rest = num % MAX_ABACUS_COLUMN_UPPER_NUM
        return !(upperNum !== MAX_ABACUS_COLUMN_UPPER_NUM || lowerNum < rest) // don't have enough beards in upper or lower deck
    } else {
        return true
    }
}

export const checkIsAllowedSubNumber = (splitNumber: number[], reversedAbacus: number[][]) => {
    const reversedSplitNumber = [...splitNumber].reverse();

    for (let i = 0; i < splitNumber.length; i++) {
        if (!checkIsAllowedSubDigit(reversedSplitNumber[i], reversedAbacus[0][i], reversedAbacus[1][i])) {
            return false;
        }
    }
    return true;
};

export const subNumberToReverseAbacus = (splitNumber: number[], reversedAbacus: number[][]) => {
    const reversedSplitNumber = [...splitNumber].reverse();
    for (let i = 0; i < splitNumber.length; i++) {
        subDigitToReversedAbacus(i, reversedSplitNumber[i], reversedAbacus)
    }
}
