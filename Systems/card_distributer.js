export class CardDistributer {
    constructor(gameState) {
        this.gameState = gameState
        this.cardSymbol = ["♠", "♥", "♦", "♣"]
        this.cardDeck = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    }

    drawCard() {
        const randomCardSymbol = this.drawRandomIndex(this.cardSymbol)
        const randomCardDeck = this.drawRandomIndex(this.cardDeck)

        // Index = Symbol + number/letter value in a deck of card. It is the same label with the index in array lol
        const chosenCard = `${randomCardSymbol}${randomCardDeck}`
        return chosenCard
    }

    drawRandomIndex(array){
        return array[Math.floor(Math.random() * array.length)]
    }

    drawHand(hand){
        this.gameState[`${hand}Hand`] = [this.drawCard(), this.drawCard()]
    }
}