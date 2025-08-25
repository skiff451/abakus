import {checkIsAllowedSubDigit} from "@/helpers/abakusLogic/abakusDirectCountOperations/subOperations";

describe("checkIsAllowedSubDigit (direct counting rules on abacus column)", () => {
    it("allows sub 1 when upper=0 and lower=4", () => {
        expect(checkIsAllowedSubDigit(1, 0, 4)).toBe(true)
    })

    it("allows sub 2 when upper=0 and lower=4", () => {
        expect(checkIsAllowedSubDigit(2, 0, 4)).toBe(true)
    })

    it("allows sub 3 when upper=0 and lower=4", () => {
        expect(checkIsAllowedSubDigit(3, 0, 4)).toBe(true)
    })

    it("allows sub 4 when upper=0 and lower=4", () => {
        expect(checkIsAllowedSubDigit(4, 0, 4)).toBe(true)
    })

    it("forbidden sub 1 when upper=0 and lower=0", () => {
        expect(checkIsAllowedSubDigit(1, 0, 0)).toBe(false)
    })

    it("forbidden sub 2 when upper=0 and lower=1", () => {
        expect(checkIsAllowedSubDigit(2, 0, 1)).toBe(false)
    })

    it("forbidden sub 3 when upper=0 and lower=2", () => {
        expect(checkIsAllowedSubDigit(3, 0, 2)).toBe(false)
    })

    it("forbidden sub 4 when upper=0 and lower=3", () => {
        expect(checkIsAllowedSubDigit(4, 0, 3)).toBe(false)
    })

    it("allows sub 5 when upper=5 and lower=3", () => {
        expect(checkIsAllowedSubDigit(5, 5, 3)).toBe(true)
    })

    it("forbidden sub 5 when upper=0 and lower=3", () => {
        expect(checkIsAllowedSubDigit(5, 0, 3)).toBe(false)
    })

    it("allows sub 6 when upper=5 and lower=1", () => {
        expect(checkIsAllowedSubDigit(6, 5, 1)).toBe(true)
    })

    it("allows sub 7 when upper=5 and lower=3", () => {
        expect(checkIsAllowedSubDigit(7, 5, 3)).toBe(true)
    })

    it("allows sub 9 when upper=5 and lower=4", () => {
        expect(checkIsAllowedSubDigit(9, 5, 4)).toBe(true)
    })

    it("forbidden sub 9 when upper=5 and lower=3", () => {
        expect(checkIsAllowedSubDigit(9, 5, 3)).toBe(false)
    })

    it("forbidden sub 8 when upper=5 and lower=2", () => {
        expect(checkIsAllowedSubDigit(8, 5, 2)).toBe(false)
    })
})
