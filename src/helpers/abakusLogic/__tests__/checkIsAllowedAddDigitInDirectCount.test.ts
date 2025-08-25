import {checkIsAllowedAddDigit} from "@/helpers/abakusLogic/abakusDirectCountOperations/addOperations";


describe("checkIsAllowedAddDigit (direct counting rules on abacus column)", ()=>{
    it("allows adding 1 when upper=0 and lower=0", () => {
        expect(checkIsAllowedAddDigit(1, 0, 0)).toBe(true)
    })

    it("allows adding 1 when upper=0 and lower=1", () => {
        expect(checkIsAllowedAddDigit(1, 0, 1)).toBe(true)
    })

    it("allows adding 1 when upper=0 and lower=2", () => {
        expect(checkIsAllowedAddDigit(1, 0, 2)).toBe(true)
    })

    it("allows adding 1 when upper=0 and lower=3", () => {
        expect(checkIsAllowedAddDigit(1, 0, 3)).toBe(true)
    })

    it("forbidden adding 1 when upper=0 and lower=4", () => {
        expect(checkIsAllowedAddDigit(1, 0, 4)).toBe(false)
    })

    it("allows adding 2 when upper=0 and lower=0", () => {
        expect(checkIsAllowedAddDigit(2, 0, 0)).toBe(true)
    })

    it("allows adding 2 when upper=0 and lower=1", () => {
        expect(checkIsAllowedAddDigit(2, 0, 1)).toBe(true)
    })

    it("allows adding 2 when upper=0 and lower=2", () => {
        expect(checkIsAllowedAddDigit(2, 0, 2)).toBe(true)
    })

    it("forbidden adding 2 when upper=0 and lower=3", () => {
        expect(checkIsAllowedAddDigit(2, 0, 3)).toBe(false)
    })

    it("allows adding 3 when upper=0 and lower=0", () => {
        expect(checkIsAllowedAddDigit(3, 0, 0)).toBe(true)
    })

    it("allows adding 3 when upper=0 and lower=1", () => {
        expect(checkIsAllowedAddDigit(3, 0, 1)).toBe(true)
    })

    it("forbidden adding 3 when upper=0 and lower=2", () => {
        expect(checkIsAllowedAddDigit(3, 0, 2)).toBe(false)
    })

    it("allows adding 4 when upper=0 and lower=0", () => {
        expect(checkIsAllowedAddDigit(4, 0, 0)).toBe(true)
    })

    it("forbidden adding 4 when upper=0 and lower=1", () => {
        expect(checkIsAllowedAddDigit(4, 0, 1)).toBe(false)
    })

    it("allows adding 5 when upper=0 and lower=0", () => {
        expect(checkIsAllowedAddDigit(5, 0, 0)).toBe(true)
    })

    it("allows adding 5 when upper=0 and lower=1", () => {
        expect(checkIsAllowedAddDigit(5, 0, 1)).toBe(true)
    })

    it("allows adding 5 when upper=0 and lower=2", () => {
        expect(checkIsAllowedAddDigit(5, 0, 2)).toBe(true)
    })

    it("allows adding 5 when upper=0 and lower=3", () => {
        expect(checkIsAllowedAddDigit(5, 0, 3)).toBe(true)
    })

    it("allows adding 5 when upper=0 and lower=4", () => {
        expect(checkIsAllowedAddDigit(5, 0, 4)).toBe(true)
    })

    it("forbidden adding 5 when upper=5 and lower=0", () => {
        expect(checkIsAllowedAddDigit(5, 5, 0)).toBe(false)
    })

    it("allows adding 6 when upper=0 and lower=0", () => {
        expect(checkIsAllowedAddDigit(6, 0, 0)).toBe(true)
    })

    it("allows adding 6 when upper=0 and lower=1", () => {
        expect(checkIsAllowedAddDigit(6, 0, 1)).toBe(true)
    })

    it("allows adding 6 when upper=0 and lower=2", () => {
        expect(checkIsAllowedAddDigit(6, 0, 2)).toBe(true)
    })

    it("allows adding 6 when upper=0 and lower=3", () => {
        expect(checkIsAllowedAddDigit(6, 0, 3)).toBe(true)
    })

    it("forbidden adding 6 when upper=0 and lower=4", () => {
        expect(checkIsAllowedAddDigit(6, 0, 4)).toBe(false)
    })

    it("forbidden adding 6 when upper=5 and lower=0", () => {
        expect(checkIsAllowedAddDigit(6, 5, 0)).toBe(false)
    })

    it("allows adding 7 when upper=0 and lower=0", () => {
        expect(checkIsAllowedAddDigit(7, 0, 0)).toBe(true)
    })

    it("allows adding 7 when upper=0 and lower=1", () => {
        expect(checkIsAllowedAddDigit(7, 0, 1)).toBe(true)
    })

    it("allows adding 7 when upper=0 and lower=2", () => {
        expect(checkIsAllowedAddDigit(7, 0, 2)).toBe(true)
    })

    it("forbidden adding 7 when upper=0 and lower=3", () => {
        expect(checkIsAllowedAddDigit(7, 0, 3)).toBe(false)
    })

    it("forbidden adding 7 when upper=0 and lower=3", () => {
        expect(checkIsAllowedAddDigit(7, 5, 0)).toBe(false)
    })

    it("allows adding 8 when upper=0 and lower=0", () => {
        expect(checkIsAllowedAddDigit(8, 0, 0)).toBe(true)
    })

    it("allows adding 8 when upper=0 and lower=1", () => {
        expect(checkIsAllowedAddDigit(8, 0, 1)).toBe(true)
    })

    it("forbidden adding 8 when upper=0 and lower=2", () => {
        expect(checkIsAllowedAddDigit(8, 0, 2)).toBe(false)
    })

    it("forbidden adding 8 when upper=5 and lower=0", () => {
        expect(checkIsAllowedAddDigit(8, 0, 2)).toBe(false)
    })
})
