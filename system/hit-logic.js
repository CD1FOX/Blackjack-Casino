import { HandValueEvaluator } from "./hand-value-evaluator.js"

const handValueEvaluator = new HandValueEvaluator()

export function hitLogic(dealer, player){
    const hitCardAmount = 1

    player.hand.push(dealer.drawCard(hitCardAmount)[0])
    player.handValue = handValueEvaluator.determineHandValue(player.hand)
    console.log(handValueEvaluator.determineBust(player.handValue, player.name))

    player.displayHand()
    player.displayHandValue()
}