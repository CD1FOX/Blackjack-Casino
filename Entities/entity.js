import { HandValueEvaluator } from "../system/hand-value-evaluator.js"

const handValueEvaluator = new HandValueEvaluator()

export class Entity {
    constructor(name) {
        this.name = name
        this.hand = []
        this.handValue = 0
    }

    displayHandValue() {
        console.log(this.name + ": " + this.handValue)
    }

    displayHand() {
        console.log(this.hand)
    }

    resetHand() {
        this.hand = []
    }
}