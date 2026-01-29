import { decideWinner } from "../system/decide-winner.js";
import { Entity } from "./entity.js";

export class Dealer extends Entity {
    decideDealerAction(dealer, player) {
        if (this.handValue < 17) {
            console.log("Dealer will draw a card")
            this.drawCard(1)
            this.getHandValue()
        } else if (this.handValue >= 17 && this.handValue <= 21) {
            console.log("Dealer will stand")
        }

        console.log(decideWinner(dealer, player))
    }
}