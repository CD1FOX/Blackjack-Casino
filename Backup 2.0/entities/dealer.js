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
        
        while (this.handValue <= 16){
            this.drawAnotherCard(deck)
            this.handValue = handValueEvaluator.getHandValue(this.hand)

            if (handValueEvaluator.bustChecker(this.handValue)){
                console.log("Dealer bust")
                break
            }
        }

        return "Stand"
    }

    drawAnotherCard(deck) {
        this.hand.push(cardDealer.drawCard(deck))
    }
}