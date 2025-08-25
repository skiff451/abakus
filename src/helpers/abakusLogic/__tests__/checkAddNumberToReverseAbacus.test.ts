import {addNumberToReverseAbacus} from "@/helpers/abakusLogic/abakusDirectCountOperations/addOperations";

describe("addNumberToReverseAbacus", () => {
    it(" add '52,  2' to reversed abacus '[[0,0,0,0],[0,0,0,0]]'", () => {
        const reverseAbacus = [
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ];
        addNumberToReverseAbacus([5, 2], reverseAbacus)
        addNumberToReverseAbacus([2], reverseAbacus)
        expect(reverseAbacus).toEqual([
            [0, 5, 0, 0],
            [4, 0, 0, 0],
        ]);
    })

    it(" add '12, 2, 5, 20, 60' to reversed abacus '[[0,0,0,0],[0,0,0,0]]'", () => {
        const reverseAbacus = [
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ];
        addNumberToReverseAbacus([1, 2], reverseAbacus)
        addNumberToReverseAbacus([2], reverseAbacus)
        addNumberToReverseAbacus([5], reverseAbacus)
        addNumberToReverseAbacus([2, 0], reverseAbacus)
        addNumberToReverseAbacus([6, 0], reverseAbacus)

        expect(reverseAbacus).toEqual([
            [5, 5, 0, 0],
            [4, 4, 0, 0],
        ]);
    })
})
