import { Entity } from "./entity.js";

export class Dealer extends Entity {
    decideDealerAction() {
        let dealerHandValue = this.getHandValue()

        setTimeout(() => {
            if (dealerHandValue < 17) {
                console.log("I will draw a card")
                this.drawCard(1)
                this.getHandValue()
                this.decideDealerAction()
            } else if (dealerHandValue >= 17 && dealerHandValue <= 21) {
                console.log("I will stand")
            } else {
                console.log("I bust")
            }
        }, 2000)
    }
}