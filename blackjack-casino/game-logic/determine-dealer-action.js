import { Deck } from "./deck.js"
import { HandEvaluator } from "./hand-evaluator.js"

const cardDealer = new Deck()
const handEvaluator = new HandEvaluator()

export class DetermineDealerAction {
    determineDealerAction(dealer, deck) {
        return new Promise((resolve) => {
            while (dealer.handValue < 17) {
                dealer.hand.push(cardDealer.getCard(deck))
                dealer.handValue = handEvaluator.getHandValue(dealer)
            }

            console.log(dealer.hand)
            console.log(dealer.handValue)

            setTimeout(() => {
                resolve("Stand")
            }, 1)
        })
    }
}