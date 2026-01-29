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
        for (let i = 0; cardAmount > i; i++){
            this.hand.push(this.cardDealer.drawRandomCard())
        }

        console.log(this.hand)
    }

    getHandValue() {
        this.handValue = 0

        for (const card of this.hand) {
            this.handValue += this.handValueEvaluator.determineCardValue(card, this.handValue)
        }

        console.log(this.name + ": " + this.handValue)
        if (this.handValue > 21){
            console.log(`${this.name} bust`)
        }
        return this.handValue
    }

    resetHand() {
        this.hand = []
    }

    getNewDeck(){
        this.cardDealer.shuffleDeckCard() 
    }
}