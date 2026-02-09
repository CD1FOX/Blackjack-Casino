export class HandValueEvaluator {
    getHandValue(hand, handValue) {
        let handValues = this.getValueFromHand(hand)

        const aceCard = 'A'
        const faceCardValue = 10

        let totalHandValue = 0

        for (const cardValue of handValues) {
            if (isFinite(cardValue)) {
                totalHandValue += Number(cardValue)
            } else if (cardValue === aceCard) {
                totalHandValue += this.getAceValue(handValue)
            } else {
                totalHandValue += faceCardValue
            }
        }

        return totalHandValue
    }

    getValueFromHand(hand) {
        let handValues = []

        for (const card of hand) {
            handValues.push(card.slice(1))
        }

        return handValues
    }

    getAceValue(handValue) {
        const aceNormalValue = 1
        const aceAlternativeValue = 11
        const halfBust = 10

        if (handValue > halfBust) {
            return aceNormalValue
        } else {
            return aceAlternativeValue
        }
    }

    bustChecker(handValue) {
        if (handValue > 21) {
            return true
        } else {
            return false
        }
    }
}