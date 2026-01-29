import { CardDealer } from "../system/card-dealer.js"
import { HandValueEvaluator } from "../system/hand-value-evaluator.js"

export class Entity {
    constructor(name) {
        this.name = name
        this.hand = []
        this.handValue = 0
        this.cardDealer = new CardDealer()
        this.handValueEvaluator = new HandValueEvaluator()
    }

    drawCard(cardAmount) {
        for (let i = 0; cardAmount > i; i++) {
            this.hand.push(this.cardDealer.drawRandomCard())
        }

        this.dispalyHand()
    }

    getHandValue() {
        this.handValue = 0

        for (const card of this.hand) {
            this.handValue += this.handValueEvaluator.determineCardValue(card, this.handValue)
        }

        this.displayHandValue()

        return this.handValue
    }

    displayHandValue() {
        console.log(this.name + ": " + this.handValue)
    }

    dispalyHand() {
        console.log(this.hand)
    }

    resetHand() {
        this.hand = []
    }

    getNewDeck() {
        this.cardDealer.shuffleDeckCard()
    }
}