import { Deck } from "../game-logic/deck.js";
import { Entity } from "../entities/entity.js";

const deck = new Deck()
const player = new Entity("Player")
const dealer = new Entity("Dealer")

export class GameFlow {
    startGame() {
        const cardDeck = deck.createDeck()

        player.hand = deck.getInitialHand(cardDeck)
        dealer.hand = deck.getInitialHand(cardDeck)

        console.log(player.hand)
        console.log(dealer.hand)
        console.log(cardDeck)
    }
}