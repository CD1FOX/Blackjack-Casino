import { CardDealer } from "../system/card-dealer.js"
import { HandValueEvaluator } from "../system/hand-value-evaluator.js"

export class Entity {
    constructor(name) {
        this.name = name
        this.hand = []  
        this.cardDealer = new CardDealer()
        this.handValueEvaluator = new HandValueEvaluator()
    }

    drawCard(cardAmount) {
        for (let i = 0; i < cardAmount; i++) {
            this.hand.push(this.cardDealer.drawCard())
        }

        console.log(this.cardDealer.deckValueCards)
        console.log(this.hand)
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