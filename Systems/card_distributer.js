export class CardDistributer {
    constructor() {
        this.cardSymbol = ["♠", "♥", "♦", "♣"]
        this.cardDeck = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    }

    drawCard() {
        return `${this.drawRandomCardSymbol()}${this.drawRandomCardValue()}`
    }

    drawRandomCardSymbol(){
        return this.cardSymbol[Math.floor(Math.random() * this.cardSymbol.length)]
    }

    drawRandomCardValue(){
        return this.cardDeck[Math.floor(Math.random() * this.cardDeck.length)]
    }

    drawHand(){
        return [this.drawCard(), this.drawCard()]
    }
}