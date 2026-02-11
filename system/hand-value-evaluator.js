export class HandValueEvaluator {
    getHandValue(hand) {
        let total = 0
        let aces = 0

        for (const card of hand){
            const value = card.slice(1)

            if (value === "A"){
                total += 11
                aces++
            } else if (["J", "Q", "K"].includes(value)){
                total += 10
            } else {
                total += Number(value)
            }
        }

        while (total > 21 && aces > 0){
            total -= 10
            aces--
        }

        return total
    }

    bustChecker(handValue){
        if (handValue > 21){
            return true
        } else {
            return false
        }
    }
}