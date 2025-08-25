import {
    MAX_ABACUS_COLUMN_LOWER_NUM, MAX_ABACUS_COLUMN_NUM,
    MAX_ABACUS_COLUMN_UPPER_NUM,
    MIN_ABACUS_COLUMN_NUM
} from "@/helpers/abakusLogic/abacusConstants";

export const abacusColumnGuards = (num: number, upperNum: number, lowerNum: number)=>{
    if (lowerNum > MAX_ABACUS_COLUMN_LOWER_NUM) {
        throw Error("lower number can't be greater then '4'")
    }
    if (upperNum !== MAX_ABACUS_COLUMN_UPPER_NUM && upperNum !== MIN_ABACUS_COLUMN_NUM) {
        throw Error("Upper number must be '5' or '0'")
    }
    if (num > MAX_ABACUS_COLUMN_NUM) {
        throw Error("Number  can't be greater then '9'")
    }
}
