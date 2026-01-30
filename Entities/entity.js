import { HandValueEvaluator } from "../system/hand-value-evaluator.js"
import { Dealer } from "./dealer.js"


const handValueEvaluator = new HandValueEvaluator()
const dealer = new Dealer()

export class Entity {
    constructor(name) {
        this.name = name
        this.hand = []
        this.handValue = 0
    }

    drawCard(cardAmount) {
        for (let i = 0; cardAmount > i; i++) {
            this.hand.push(dealer.drawRandomCard())
        }
        this.dispalyHand()
    }

    getHandValue() {
        this.handValue = 0

        for (const card of this.hand) {
            this.handValue += handValueEvaluator.determineCardValue(card, this.handValue)
        }

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