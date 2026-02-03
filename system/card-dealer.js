export class CardDealer {
    /**
     * Get a deck
     * Get random card
     */

    createDeck() {
        const suits = ["♠", "♥", "♦", "♣"]
        const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

        let deck = []

        for (const suit of suits) {
            for (const value of values) {
                deck.push(`${suit}${value}`)
            }
        }

        return deck
    }

    drawCard(deck) {
        const randomIndex = Math.floor(Math.random() * deck.length)

        const randomCard = deck[randomIndex]

        return randomCard
    }
}