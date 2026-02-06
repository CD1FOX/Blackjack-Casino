import { Entities } from "../entities/entities.js"
import { CardDealer } from "./card-dealer.js"
import { HandValueEvaluator } from "./hand-value-evaluator.js"

const cardDealer = new CardDealer()
const handValueEvaluator = new HandValueEvaluator()

const player = new Entities("Player")
const dealer = new Entities("Dealer")

export class GameController {
    startGame() {
        let deck = cardDealer.createDeck()

        player.hand = cardDealer.getInitialHand(player.initialCards, deck)
        dealer.hand = cardDealer.getInitialHand(dealer.initialCards, deck)
        
        cardDealer.removeHandFromDeck(player.hand, deck)
        cardDealer.removeHandFromDeck(dealer.hand, deck)

        console.log(handValueEvaluator.getHandValue(player.hand))

        console.log(player.hand)
        console.log(dealer.hand)
    }
}