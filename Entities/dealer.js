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

    drawCard() {
        if (indexCombination.length === 0) {
            return "No more combinations"
        }

        let cards = []



        const randomIndex = Math.floor(Math.random() * indexCombination.length)
        return indexCombination.splice(randomIndex, 1)[0]
    }

    decideDealerAction(dealer, player) {
        return
    }
}