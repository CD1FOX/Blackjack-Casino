export class Deck {
    constructor() {
        this.combinations = []
    }

    createDeck() {
        const suits = ["♠", "♥", "♦", "♣"]
        const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

        for (const suit of suits) {
            for (const value of values) {
                this.combinations.push(`${suit}${value}`)
            }
        }

        return this.combinations
    }

    getCard() {
        const randomIndex = Math.floor(Math.random() * (this.combinations.length + 1))

        const card = this.combinations.splice(randomIndex, 1)[0]

        return card
    }

    getInitialHand() {
        let initialCardAmount = 2
        let hand = []

        for (const x = 0; initialCardAmount > x; initialCardAmount--){
            hand.push(this.getCard())
        }

        return hand
    }
}