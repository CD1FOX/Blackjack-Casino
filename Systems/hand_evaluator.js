export class HandEvaluator {
    constructor(gameState) {
        this.gameState = gameState
    }

    determineCardValue(hand, cardIndex, handValue) {
        let number = this.sliceCardNumber(hand, cardIndex)

        if (isFinite(number)) {
            return number
        } else if (number === "A") {
            if (handValue > 10) {
                return number = 1
            } else {
                return number = 11
            }
        } else {
            return 10
        }
    }

    sliceCardNumber(hand, cardIndex){
        return hand[cardIndex].slice(1)
    }
}
