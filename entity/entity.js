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
        this.hand = []
        
        for (let i = 0; cardAmount > i; i++){
            this.hand.push(this.cardDealer.drawRandomCard())
        }

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
        this.getNewDeck()
    }

    getNewDeck(){
        this.cardDealer.shuffleDeckCard() 
    }
}