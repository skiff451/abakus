import {subDigitToReversedAbacus} from "@/helpers/abakusLogic/abakusDirectCountOperations/subOperations";

describe("subDigitToReversedAbacus", () => {
    it(" sub '4' to index '0' in reversed abacus '[[0,0,0,0],[4,0,0,0]]'", () => {
        const reverseAbacus = [
            [0, 0, 0, 0],
            [4, 0, 0, 0]
        ];
        subDigitToReversedAbacus(0, 4, reverseAbacus)
        expect(reverseAbacus).toEqual([
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ]);
    })

    it("sub '5' to index '0' in reversed abacus '[[5,0,0,0],[4,0,0,0]]'", () => {
        const reverseAbacus = [
            [5, 0, 0, 0],
            [4, 0, 0, 0]
        ];
        subDigitToReversedAbacus(0, 5, reverseAbacus)
        expect(reverseAbacus).toEqual([
            [0, 0, 0, 0],
            [4, 0, 0, 0],
        ]);
    })

    it("sub '9' to index '0' in reversed abacus '[[5,0,0,0],[4,0,0,0]]'", () => {
        const reverseAbacus = [
            [5, 0, 0, 0],
            [4, 0, 0, 0]
        ];
        subDigitToReversedAbacus(0, 9, reverseAbacus)
        expect(reverseAbacus).toEqual([
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ]);
    })

    it("sub '9' to index '1' in reversed abacus '[[0,5,0,0],[0,4,0,0]]'", () => {
        const reverseAbacus = [
            [5, 5, 0, 0],
            [4, 4, 0, 0]
        ];
        subDigitToReversedAbacus(1, 9, reverseAbacus)
        expect(reverseAbacus).toEqual([
            [5, 0, 0, 0],
            [4, 0, 0, 0],
        ]);
    })

    it("sub '6' to index '3' in reversed abacus '[[5,0,5,5],[1,4,3,2]]'", () => {
        const reverseAbacus = [
            [5, 0, 5, 5],
            [1, 4, 3, 2]
        ];
        subDigitToReversedAbacus(3, 6, reverseAbacus)
        expect(reverseAbacus).toEqual([
            [5, 0, 5, 0],
            [1, 4, 3, 1]
        ]);
    })
})
