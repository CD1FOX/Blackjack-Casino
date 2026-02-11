import { UI } from "../user-interferance/ui.js"

export class CardDealer {
    /**
     * Get a deck
     * Get random card
     */

    constructor() {
        this.ui = null
    }

    uiInit(){
       this.ui = new UI() 
    }

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

        const card = deck.splice(randomIndex, 1)[0]

        return card
    }

    getInitialHand(initialCards, deck) {
        let initialHand = []

        for (let i = 0; initialCards > i; i++) {
            initialHand.push(this.drawCard(deck))
        }

        return initialHand
    }

    removeHandFromDeck(hand, deck){
        for (const card of hand){
            const index = deck.indexOf(card)
            
            if (index !== -1){
                deck.splice(index, 1)
            }
        }

        return deck
    }
}