import { Entity } from "../Entities/entity.js"
import { HandValueEvaluator } from "./hand-value-evaluator.js"
import { Dealer } from "../Entities/dealer.js"

const handValueEvaluator = new HandValueEvaluator()
const player = new Entity("player")
const dealer = new Dealer("dealer")

export class GameController {
    constructor() {

    }

    start() {
        const initialCards = 2

        dealer.shuffleDeckCard()

        dealer.hand = dealer.drawCard(initialCards)
        player.hand = dealer.drawCard(initialCards)

        dealer.displayHand()
        player.displayHand()

        dealer.handValue = handValueEvaluator.determineHandValue(dealer.hand)
        player.handValue = handValueEvaluator.determineHandValue(player.hand)

        dealer.displayHandValue()
        player.displayHandValue()
    }

    hit() {
        const hitCardAmount = 1

        player.hand.push(dealer.drawCard(hitCardAmount)[0])
        player.handValue = handValueEvaluator.determineHandValue(player.hand)
        player.bust = handValueEvaluator.determineBust(player.handValue, player.name)

        player.displayHand()
        player.displayHandValue()
    }

    stand() {
        dealer.decideDealerAction()
        setTimeout(() => {
            console.log(decideWinner(dealer, player))
        }, 5000)
    }
}