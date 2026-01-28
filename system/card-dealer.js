export const deckValueCards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

export class CardDealer {
    drawCard() {
        return (`${this.getRandomCardSymbol()}${this.getRandomCardValue()}`)
    }

    getRandomCardSymbol() {
        const cardSymbol = ["♠", "♥", "♦", "♣"]
        return cardSymbol[Math.floor(Math.random() * cardSymbol.length)]
    }

    getRandomCardValue() {
        const randomValue = deckValueCards[Math.floor(Math.random() * deckValueCards.length)]
        
        const cardValue = this.removeCardValue(randomValue)

        return cardValue
    }

    removeCardValue(randomValue) {
        return deckValueCards.splice(randomValue, 1)[0]
    }
}