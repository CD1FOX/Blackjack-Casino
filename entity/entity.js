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

    getCard(cardAmount){
        for (let i = 0; i < cardAmount; i++){
            this.hand.push(this.cardDealer.drawCard())
        }
        console.log(this.hand)
    }

    getHandValue(){
        console.log(this.handValueEvaluator.determineCardValue(this.hand, this.handValue))
    }
}