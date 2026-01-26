export class HandValueEvaluator {
    determineCardValue(card, handValue) {
        let value = card.slice(1)
        
        if (isFinite(value)) {
            return Number(value)
        } else if (value === "A") {
            return this.determineAceValue(handValue)
        } else {
            return 10
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