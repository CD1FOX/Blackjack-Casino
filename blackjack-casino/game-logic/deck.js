export class Deck {
    createDeck() {
        const combinations = []
        const suits = ["♠", "♥", "♦", "♣"]
        const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

        for (const suit of suits) {
            for (const value of values) {
                combinations.push(`${suit}${value}`)
            }
        }

        return combinations
    }

    getCard(deck) {
        const randomIndex = Math.floor(Math.random() * deck.length) // 0 to 51.9999 

        const card = deck.splice(randomIndex, 1)[0]

        return card
    }

    getInitialHand(deck) {
        let initialCardAmount = 2
        let hand = []

        for (const x = 0; initialCardAmount > x; initialCardAmount--){
            hand.push(this.getCard(deck))
        }

        return hand
    }
}