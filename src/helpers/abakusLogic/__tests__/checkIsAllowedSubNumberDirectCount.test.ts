import {checkIsAllowedSubNumber} from "@/helpers/abakusLogic/abakusDirectCountOperations/subOperations";

describe("checkIsAllowedSubNumber (direct counting rules on abacus)", () => {
    it("forbidden sub [4] when [[0,0,0,0],[3,0,0,0]]", () => {
        expect(checkIsAllowedSubNumber([4], [[0, 0, 0, 0], [3, 0, 0, 0]])).toBe(false)
    })

    it("forbidden sub [3] when [[0,0,0,0],[2,0,0,0]]", () => {
        expect(checkIsAllowedSubNumber([3], [[0, 0, 0, 0], [2, 0, 0, 0]])).toBe(false)
    })

    it("forbidden sub [2] when [[0,0,0,0],[1,0,0,0]]", () => {
        expect(checkIsAllowedSubNumber([2], [[0, 0, 0, 0], [1, 0, 0, 0]])).toBe(false)
    })

    it("forbidden sub [1] when [[0,0,0,0],[0,0,0,0]]", () => {
        expect(checkIsAllowedSubNumber([1], [[0, 0, 0, 0], [0, 0, 0, 0]])).toBe(false)
    })

    it("forbidden sub [7] when [[0,0,0,0],[4,0,0,0]]", () => {
        expect(checkIsAllowedSubNumber([7], [[0, 0, 0, 0], [4, 0, 0, 0]])).toBe(false)
    })

    it("forbidden sub [7, 5, 1] when [[5,5,0,0],[0,1,3,0]]", () => {
        expect(checkIsAllowedSubNumber([7, 5, 1], [[5, 5, 0, 0], [0, 1, 3, 0]])).toBe(false)
    })

    it("allow sub [7, 5, 1, 4] when [[5,5,5,5],[4,1,3,4]]", () => {
        expect(checkIsAllowedSubNumber([7, 5, 1, 4], [[5, 5, 5, 5], [4, 1, 3, 4]])).toBe(true)
    })
})
