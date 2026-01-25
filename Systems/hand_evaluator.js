export class HandEvaluator {
    constructor(gameState) {
        this.gameState = gameState
    }

    determineCardValue(hand, cardIndex, handValue) {
        let cardValue = hand[cardIndex].slice(1)

        if (isFinite(cardValue)) {
            return cardValue
        } else if (cardValue === "A") {
            if (handValue > 10) {
                return cardValue = 1
            } else {
                return cardValue = 11
            }
        } else {
            return 10
        }
    }
}
