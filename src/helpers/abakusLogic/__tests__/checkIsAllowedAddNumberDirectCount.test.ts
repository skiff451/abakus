import {checkIsAllowedAddNumber} from "@/helpers/abakusLogic/abakusDirectCountOperations/addOperations";

describe("checkIsAllowedAddNumber (direct counting rules on abacus)", () => {
    it("forbidden adding [1] when [[0,0,0,0],[4,0,0,0]]", () => {
        expect(checkIsAllowedAddNumber([1], [[0, 0, 0, 0], [4, 0, 0, 0]])).toBe(false)
    })

    it("forbidden adding [2] when [[0,0,0,0],[3,0,0,0]]", () => {
        expect(checkIsAllowedAddNumber([2], [[0, 0, 0, 0], [3, 0, 0, 0]])).toBe(false)
    })

    it("forbidden adding [3] when [[0,0,0,0],[2,0,0,0]]", () => {
        expect(checkIsAllowedAddNumber([3], [[0, 0, 0, 0], [2, 0, 0, 0]])).toBe(false)
    })

    it("forbidden adding [4] when [[0,0,0,0],[1,0,0,0]]", () => {
        expect(checkIsAllowedAddNumber([4], [[0, 0, 0, 0], [1, 0, 0, 0]])).toBe(false)
    })

    it("forbidden adding [5] when [[5,0,0,0],[0,0,0,0]]", () => {
        expect(checkIsAllowedAddNumber([5], [[5, 0, 0, 0], [0, 0, 0, 0]])).toBe(false)
    })

    it("forbidden adding [5] when [[5,0,0,0],[4,0,0,0]]", () => {
        expect(checkIsAllowedAddNumber([5], [[5, 0, 0, 0], [4, 0, 0, 0]])).toBe(false)
    })

    it("forbidden adding [1, 0] when [[0,0,0,0],[0,4,0,0]]", () => {
        expect(checkIsAllowedAddNumber([1, 0], [[0, 0, 0, 0], [0, 4, 0, 0]])).toBe(false)
    })

    it("forbidden adding [2, 0] when [[0,0,0,0],[0,3,0,0]]", () => {
        expect(checkIsAllowedAddNumber([2, 0], [[0, 0, 0, 0], [0, 3, 0, 0]])).toBe(false)
    })

    it("forbidden adding [3, 0] when [[0,0,0,0],[0,2,0,0]]", () => {
        expect(checkIsAllowedAddNumber([3, 0], [[0, 0, 0, 0], [0, 2, 0, 0]])).toBe(false)
    })

    it("forbidden adding [4, 0] when [[0,0,0,0],[0,1,0,0]]", () => {
        expect(checkIsAllowedAddNumber([4, 0], [[0, 0, 0, 0], [0, 1, 0, 0]])).toBe(false)
    })

    it("forbidden adding [7, 0] when [[0,0,0,0],[0,3,0,0]]", () => {
        expect(checkIsAllowedAddNumber([7, 0], [[0, 0, 0, 0], [0, 3, 0, 0]])).toBe(false)
    })

    it("allow adding [1,1,1,1] when [[5,5,5,5],[1,1,1,1]]", () => {
        expect(checkIsAllowedAddNumber([1, 1, 1, 1], [[5, 5, 5, 5], [1, 1, 1, 1]])).toBe(true)
    })
    it("allow adding [1,1,1,1] when [[5,5,5,5],[3,3,3,3]]", () => {
        expect(checkIsAllowedAddNumber([1, 1, 1, 1], [[5, 5, 5, 5], [3, 3, 3, 3]])).toBe(true)
    })

    it("allow adding [7,7,7,7] when [[0,0,0,0],[2,2,2,2]]", () => {
        expect(checkIsAllowedAddNumber([7, 7, 7, 7], [[0, 0, 0, 0], [2, 2, 2, 2]])).toBe(true)
    })

    it("forbidden adding [3,7] when [[0,5,0,0],[4,0,0,0]]", () => {
        expect(checkIsAllowedAddNumber([3, 7], [[0, 5, 0, 0], [4, 0, 0, 0]])).toBe(false)
    })

})
