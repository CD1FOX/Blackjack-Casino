import { Deck } from "./deck.js"
import { HandEvaluator } from "./hand-evaluator.js"
import { DetermineWinner } from "./determine-winner.js"

const cardDealer = new Deck()
const handEvaluator = new HandEvaluator()
const determineWinner = new DetermineWinner()

export class DetermineDealerAction {
    determineDealerAction(dealer, deck) {
        return new Promise((resolve) => {
            while (dealer.handValue < 17) {
                dealer.hand.push(cardDealer.getCard(deck))
                dealer.handValue = handEvaluator.getHandValue(dealer.hand, dealer)
            }

            console.log(dealer.hand)
            console.log(dealer.handValue)

            setTimeout(() => {
                resolve("Stand")
            }, 2000)
        })
    }
}