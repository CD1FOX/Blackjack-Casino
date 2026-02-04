import { Entities } from "../entities/entities.js"
import { CardDealer } from "./card-dealer.js"

const cardDealer = new CardDealer()

const player = new Entities("Player")
const dealer = new Entities("Dealer")

export class GameController {
    startGame() {
        let deck = cardDealer.createDeck()

        player.hand = cardDealer.getInitialHand(player.initialCards, deck)
        dealer.hand = cardDealer.getInitialHand(dealer.initialCards, deck)
        
        cardDealer.removeHandFromDeck(player.hand, deck)
        cardDealer.removeHandFromDeck(dealer.hand, deck)

        

        console.log(player.hand)
        console.log(deck)
    }
}