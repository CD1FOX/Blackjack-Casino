export class HandEvaluator {
    getHandValue(hand) {
        let handValue = 0
        let cardAces = 0
        const faceCardValue = 10
        const normalAceValue = 1
        const alterAceValue = 11

        for (const card of hand) {
            const cardValue = this.getCardValue(card)

            if (cardValue === "A") {
                cardAces++
                handValue += alterAceValue
            } else if (["J", "Q", "K"].includes(cardValue)){
                handValue += faceCardValue
            } else {
                handValue += Number(cardValue)
            }
        }

        if (cardAces > 0 && handValue > 21){
            handValue -= (alterAceValue - normalAceValue)
            cardAces--
        }

        return handValue
    }

    getCardValue(card) {
        return card.slice(1)
    }
}