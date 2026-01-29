import { CardDealer } from "../system/card-dealer.js"
import { HandValueEvaluator } from "../system/hand-value-evaluator.js"
import { indexCombination } from "../system/card-dealer.js"

export class Entity {
    constructor(name) {
        this.name = name
        this.hand = []  
        this.cardDealer = new CardDealer()
        this.handValueEvaluator = new HandValueEvaluator()
    }

    drawCard(cardAmount) {
        for (let i = 0; cardAmount > i; i++){
            this.hand.push(this.cardDealer.drawRandomCard())
        }

        console.log(this.hand)
        console.log(indexCombination)
    }

    getHandValue() {
        let handValue = 0

        for (const card of this.hand) {
            handValue += this.handValueEvaluator.determineCardValue(card, handValue)
        }

        return handValue
    }

    resetHand() {
        this.hand = []
    }
}