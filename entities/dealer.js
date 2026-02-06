import { CardDealer } from "../system/card-dealer.js";
import { HandValueEvaluator } from "../system/hand-value-evaluator.js";
import { Entities } from "./entities.js";

const cardDealer = new CardDealer()
const handValueEvaluator = new HandValueEvaluator()

export class Dealer extends Entities {
    /**
     * Can decide whether to stand or to take another card (hit)
     */

    decideAction(deck) {
        /**
         * Check if the hand value is greater than or equal 17
         * if it's equal or greater than 17, then stand else hit
         */
        console.log(1)
        if (this.handValue >= 17) {
            return "Stand"
        } else {
            this.drawAnotherCard(deck)

            this.handValue = this.getHandValue()

            this.decideAction(deck)
        }
        
    }

    drawAnotherCard(deck) {
        this.hand.push(cardDealer.drawCard(deck))
    }

    getHandValue(){
        return handValueEvaluator.getHandValue(this.hand, this.handValue)
    }
}