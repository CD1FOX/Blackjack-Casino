import { Dealer } from "../entities/dealer.js"
import { Entities } from "../entities/entities.js"
import { CardDealer } from "./card-dealer.js"
import { HandValueEvaluator } from "./hand-value-evaluator.js"

const cardDealer = new CardDealer()
const handValueEvaluator = new HandValueEvaluator()

const player = new Entities("Player")
const dealer = new Dealer("Dealer")

export class GameController {
    constructor() {
        this.deck = cardDealer.createDeck()
    }

    startGame() {
        player.hand = cardDealer.getInitialHand(player.initialCards, this.deck)
        dealer.hand = cardDealer.getInitialHand(dealer.initialCards, this.deck)

        cardDealer.removeHandFromDeck(player.hand, this.deck)
        cardDealer.removeHandFromDeck(dealer.hand, this.deck)

        player.handValue = handValueEvaluator.getHandValue(player.hand, player.handValue)
        dealer.handValue = handValueEvaluator.getHandValue(dealer.hand, dealer.handValue)

        console.log(player.hand)
        console.log(dealer.hand)

        console.log(player.handValue)
        console.log(dealer.handValue)
    }

    cardHit() {
        player.hand.push(cardDealer.drawCard(this.deck))

        cardDealer.removeHandFromDeck(player.hand, this.deck)

        player.handValue = handValueEvaluator.getHandValue(player.hand, player.handValue)

        console.log(player.hand)
        console.log(player.handValue)
    }

    stand() {

    }
}