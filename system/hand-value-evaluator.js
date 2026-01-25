export class HandValueEvaluator {
    determineCardValue(hand, handValue) {
        for (const card of hand) {
            console.log(hand)
            let value = card.slice(1)

            if (isFinite(value)) {
                return value
            } else if (value === "A") {
                return determineAceValue(handValue)
            } else {
                return 10
            }
        }
    }

    determineAceValue(handValue) {
        if (handValue > 10) {
            return 1
        } else {
            return 11
        }
    }
}