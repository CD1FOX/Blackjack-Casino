import { Dealer } from "../entities/dealer.js"
import { Entities } from "../entities/entities.js"
import { CardDealer } from "./card-dealer.js"
import { decideWinner } from "./decide-winner.js"
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

        player.handValue = handValueEvaluator.getHandValue(player.hand)
        dealer.handValue = handValueEvaluator.getHandValue(dealer.hand)

        console.log(player.hand)
        console.log(dealer.hand)

        console.log(player.handValue)
        console.log(dealer.handValue)

        console.log(this.deck)
    }

    cardHit() {
        player.hand.push(cardDealer.drawCard(this.deck))

        player.handValue = handValueEvaluator.getHandValue(player.hand)

        if (handValueEvaluator.bustChecker(player.handValue)){

            console.log("Player bust")
        }

        console.log(player.hand)
        console.log(player.handValue)
    }

    stand() {
        dealer.decideAction(this.deck)
        console.log(dealer.hand)
        console.log(dealer.handValue)

        console.log(decideWinner(player.handValue, dealer.handValue))
    }
}