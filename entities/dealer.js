import { CardDealer } from "../system/card-dealer.js";
import { WinnerDecider } from "../system/winner-decider.js";
import { Entities } from "./entities.js";

const cardDealer = new CardDealer()
const winnerDecider = new WinnerDecider()

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
            return "Stand"
        } else {
            this.getAnotherCard()
        }
    }

    getAnotherCard() {
        this.hand.push(cardDealer.drawCard())
    }
}