import { Deck } from "../game-logic/deck.js";
import { Entity } from "../entities/entity.js";

const deck = new Deck()
const player = new Entity("Player")
const dealer = new Entity("Dealer")

export class GameFlow {
    constructor() {
        this.gameDeck = deck.createDeck()
    }

    startGame() {


        player.hand = deck.getInitialHand()
        dealer.hand = deck.getInitialHand()

        console.log(player.hand)
        console.log(dealer.hand)
        console.log(this.gameDeck)
    }
}