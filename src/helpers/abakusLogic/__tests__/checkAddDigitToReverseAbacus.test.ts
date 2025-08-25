import {addDigitToReversedAbacus} from "@/helpers/abakusLogic/abakusDirectCountOperations/addOperations";


describe("addDigitToReversedAbacus ", () => {
    it(" add '7' to index '0' in reversed abacus '[[0,0,0,0],[2,0,0,0]]'", () => {
        const reverseAbacus = [
            [0, 0, 0, 0],
            [2, 0, 0, 0]
        ];
        addDigitToReversedAbacus(0, 7, reverseAbacus)
        expect(reverseAbacus).toEqual([
            [5, 0, 0, 0],
            [4, 0, 0, 0],
        ]);
    })

    it(" add '2' to index '0' in reversed abacus '[[0,0,0,0],[2,0,0,0]]'", () => {
        const reverseAbacus = [
            [0, 0, 0, 0],
            [2, 0, 0, 0]
        ];
        addDigitToReversedAbacus(0, 2, reverseAbacus)
        expect(reverseAbacus).toEqual([
            [0, 0, 0, 0],
            [4, 0, 0, 0],
        ]);
    })

    it(" add '5' to index '1' in reversed abacus '[[0,0,0,0],[2,0,0,0]]'", () => {
        const reverseAbacus = [
            [0, 0, 0, 0],
            [2, 0, 0, 0]
        ];
        addDigitToReversedAbacus(1, 5, reverseAbacus)
        expect(reverseAbacus).toEqual([
            [0, 5, 0, 0],
            [2, 0, 0, 0],
        ]);
    })
})
