export class CardEvaluator {
    constructor(gameState) {
        this.gameState = gameState
    }

    determineCardValue(hand, indexRank, handValue) {
        // Index = Symbol + number/letter value in a deck of card. It is the same label/call with the index in array lol, so I called indexRank
        let value = this.sliceCardIndex(hand, indexRank)

        if (isFinite(value)) {
            return value
        } else if (value === "A") {
            return this.determineAceValue(handValue)
        } else {
            return 10
        }
    }

    sliceCardIndex(hand, cardIndex) {
        return hand[cardIndex].slice(1)
    }

    determineAceValue(handValue) {
        if (handValue > 10) {
            return 1
        } else {
            return 11
        }
    }
}
