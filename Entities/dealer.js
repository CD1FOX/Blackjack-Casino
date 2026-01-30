import { Entity } from "./entity.js";

const cardSymbol = ["♠", "♥", "♦", "♣"]
const deckValueCards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
let indexCombination = []

export class Dealer extends Entity {
    shuffleDeckCard() {
        indexCombination = []

        for (let symbol of cardSymbol) {
            for (let value of deckValueCards) {
                indexCombination.push(`${symbol}${value}`)
            }
        }
    }

    drawCard(cardAmount) {
        
        if (indexCombination.length === 0) {
            return "No more combinations"
        }

        let cards = []

        for (let i = 0; cardAmount > i; i++){
            const randomIndex = Math.floor(Math.random() * indexCombination.length)
            const card = indexCombination.splice(randomIndex, 1)[0]

            cards.push(card)
        }

        return cards
    }

    decideDealerAction(dealer, player) {
        return
    }
}