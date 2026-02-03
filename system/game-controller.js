import { CardDealer } from "./card-dealer.js"

const cardDealer = new CardDealer()

export class GameController {
    startGame() {
        let card = cardDealer.createDeck()

        console.log(card)
    }
}