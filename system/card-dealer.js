export class CardDealer {
    drawCard() {
        return (`${this.drawRandomCardSymbol()}${this.drawRandomCardValue()}`)
    }

    drawRandomCardSymbol() {
        const cardSymbol = ["♠", "♥", "♦", "♣"]
        return cardSymbol[Math.floor(Math.random() * cardSymbol.length)]
    }

    drawRandomCardValue() {
        const cardValue = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
        return cardValue[Math.floor(Math.random() * cardValue.length)]
    }
}