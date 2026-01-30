export class HandValueEvaluator {
    determineHandValue(hand) {
        let handValue = 0

        for (const card of hand) {
            let value = card.slice(1)

            if (isFinite(value)) {
                handValue += Number(value)
            } else if (value === "A") {
                handValue += this.determineAceValue(handValue)
            } else {
                handValue += 10
            }
        }
        return handValue
    }

    determineAceValue(handValue) {
        if (handValue > 10) {
            return 1
        } else {
            return 11
        }
    }

    determineBust(handValue) {
        if (handValue > 21) {
            return true
        } else {
            return false
        }
    }
}