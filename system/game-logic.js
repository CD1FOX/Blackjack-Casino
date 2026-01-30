import { HandValueEvaluator } from "./hand-value-evaluator.js"

const handValueEvaluator = new HandValueEvaluator()

export function GameLogic(dealer, player){
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