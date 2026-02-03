import { CardDealer } from "./card-dealer.js"

const cardDealer = new CardDealer()

export class GameController {
    startGame() {
        let deck = cardDealer.createDeck()

        console.log(cardDealer.drawCard(deck))
        console.log(deck)
    }
}