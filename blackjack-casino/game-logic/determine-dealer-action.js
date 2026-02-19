import { Deck } from "./deck.js"
import { HandEvaluator } from "./hand-evaluator.js"

const cardDealer = new Deck()
const handEvaluator = new HandEvaluator()

export class DetermineDealerAction {
    getDealerAction(dealer, deck) {
        while (dealer.handValue < 17) {
            dealer.hand.push(cardDealer.getCard(deck))

            dealer.handValue = handEvaluator.getHandValue(dealer.hand)
        }

        console.log(dealer.hand)
        console.log(dealer.handValue)
        return "Stand"
    }
}