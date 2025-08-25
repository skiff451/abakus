import {MAX_ABACUS_COLUMN_LOWER_NUM, MAX_ABACUS_COLUMN_UPPER_NUM} from "@/helpers/abakusLogic/abacusConstants";
import {abacusColumnGuards} from "@/helpers/abakusLogic/abacusColumnGuards";

export const addDigitToReversedAbacus = (index: number, num: number, reversedAbacus: number[][]) => {
    const upperDeck = 0;
    const lowerDeck = 1;
    if (num <= MAX_ABACUS_COLUMN_LOWER_NUM) {
        reversedAbacus[lowerDeck][index] += num
    } else if (num === MAX_ABACUS_COLUMN_UPPER_NUM) {
        reversedAbacus[upperDeck][index] += num
    } else {
        reversedAbacus[lowerDeck][index] += num % MAX_ABACUS_COLUMN_UPPER_NUM
        reversedAbacus[upperDeck][index] += MAX_ABACUS_COLUMN_UPPER_NUM
    }
}

export const checkIsAllowedAddDigit = (num: number, upperNum: number, lowerNum: number) => {
    abacusColumnGuards(num, upperNum, lowerNum)

    const allowedLowerNum = MAX_ABACUS_COLUMN_LOWER_NUM - lowerNum

    if (num < MAX_ABACUS_COLUMN_UPPER_NUM && allowedLowerNum < num) { // don't have enough abacus bead in lower deck
        return false
    } else if (num === MAX_ABACUS_COLUMN_UPPER_NUM && upperNum === MAX_ABACUS_COLUMN_UPPER_NUM) { // don't have enough abacus bead in upper deck
        return false
    } else if (num > MAX_ABACUS_COLUMN_UPPER_NUM) { // number greater than '5'
        const rest = num % MAX_ABACUS_COLUMN_UPPER_NUM
        return !(upperNum === MAX_ABACUS_COLUMN_UPPER_NUM || allowedLowerNum < rest); // upper beard or low beard is engaged
    } else {
        return true
    }
}

export const checkIsAllowedAddNumber = (splitNumber: number[], reversedAbacus: number[][]) => {
    const reversedSplitNumber = [...splitNumber].reverse();

    for (let i = 0; i < splitNumber.length; i++) {
        if (!checkIsAllowedAddDigit(reversedSplitNumber[i], reversedAbacus[0][i], reversedAbacus[1][i])) {
            return false;
        }
    }
    return true;
};

export const addNumberToReverseAbacus = (splitNumber: number[], reversedAbacus: number[][])=>{
    const reversedSplitNumber = [...splitNumber].reverse();
    for (let i = 0; i < splitNumber.length; i++) {
        addDigitToReversedAbacus(i, reversedSplitNumber[i], reversedAbacus)
    }
}
