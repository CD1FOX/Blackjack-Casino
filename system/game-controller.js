import { Entity } from "../Entities/entity.js"
import { HandValueEvaluator } from "./hand-value-evaluator.js"
import { Dealer } from "../Entities/dealer.js"
import { displayHand, displayHandValue } from "../userInterface/UI.js"

const handValueEvaluator = new HandValueEvaluator()
const player = new Entity("Player")
const dealer = new Dealer("Dealer")

export class GameController {
    start() {
        const initialCards = 2

        dealer.shuffleDeckCard()

        dealer.hand = dealer.drawCard(initialCards)
        player.hand = dealer.drawCard(initialCards)

        displayHand(dealer)
        displayHand(player)

        dealer.handValue = handValueEvaluator.determineHandValue(dealer.hand)
        player.handValue = handValueEvaluator.determineHandValue(player.hand)

        displayHandValue(dealer)
        displayHandValue(player)
    }

    hit() {
        const hitCardAmount = 1

        player.hand.push(dealer.drawCard(hitCardAmount)[0])
        player.handValue = handValueEvaluator.determineHandValue(player.hand)
        player.bust = handValueEvaluator.determineBust(player.handValue, player.name)

        displayHand(player)
        displayHandValue(player)
    }

    stand() {
        dealer.decideDealerAction()
        setTimeout(() => {
            console.log(decideWinner(dealer, player))
        }, 5000)
    }
}

