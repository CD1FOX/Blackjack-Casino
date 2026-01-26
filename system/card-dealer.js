export class CardDealer {
    constructor() {
        this.deckValueCards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    }

    drawCard() {
        return (`${this.getRandomCardSymbol()}${this.getRandomCardValue()}`)
    }

    getRandomCardSymbol() {
        const cardSymbol = ["♠", "♥", "♦", "♣"]
        return cardSymbol[Math.floor(Math.random() * cardSymbol.length)]
    }

    getRandomCardValue() {
        const randomValue = this.deckValueCards[Math.floor(Math.random() * this.deckValueCards.length)]

        const cardValue = this.removeCardValue(randomValue)

        return cardValue
    }

    removeCardValue(randomValue) {
        return this.deckValueCards.splice(randomValue, 1)[0]
    }
}