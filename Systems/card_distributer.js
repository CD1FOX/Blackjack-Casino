export class CardDistributer {
    constructor(gameState) {
        this.gameState = gameState
        this.cardSymbol = ["♠", "♥", "♦", "♣"]
        this.cardDeck = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    }

    drawCard() {
        const randomCardSymbol = this.cardSymbol[Math.floor(Math.random() * this.cardSymbol.length)]
        const randomCardDeck = this.cardDeck[Math.floor(Math.random() * this.cardDeck.length)]

        const chosenCard = `${randomCardSymbol}${randomCardDeck}`
        return chosenCard
    }

    drawHand(hand){
        this.gameState[`${hand}Hand`] = [this.drawCard(), this.drawCard()]
    }
}