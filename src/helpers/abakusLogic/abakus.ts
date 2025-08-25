export class Abacus {
    abacus = [
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]
    reverseAbacus = (abacus: number[][]) => {
        return this.abacus = this.abacus.map((i) => (i.reverse()))
    }

}
