export class HandValueEvaluator {
    getHandValue(hand, handValue) {
        let handValues = this.getValueFromHand(hand)

        for(const value of handValues){
            
        }
    }

    getValueFromHand(hand) {
        let handValues = []

        for(const card of hand){
            handValues.push(card.slice(1))
        }

        return handValues 
    }
}