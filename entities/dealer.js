import { CardDealer } from "../system/card-dealer.js";
import { Entities } from "./entities.js";

const cardDealer = new CardDealer()

export class Dealer extends Entities {
    /**
     * Can decide whether to stand or to take another card (hit)
     */

    decideAction() {
        /**
         * Check if the hand value is greater than or equal 17
         * if it's equal or greater than 17, then stand else hit
         */

        if (this.handValue >= 17) {
            this.stand()
        } else {
            this.getAnotherCard()
        }
    }

    getAnotherCard() {
        return this.hand.push(cardDealer.drawCard())
    }

    stand() {
        return null
    }
}