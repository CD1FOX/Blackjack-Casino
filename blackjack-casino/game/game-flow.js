import { Deck } from "../game-logic/deck.js";
import { Entity } from "../entities/entity.js";
import { HandEvaluator } from "../game-logic/hand-evaluator.js";

const deck = new Deck()
const handEvaluator = new HandEvaluator()
const player = new Entity("Player")
const dealer = new Entity("Dealer")

export class GameFlow {
    startGame() {
        const cardDeck = deck.createDeck()

        player.hand = deck.getInitialHand(cardDeck)
        dealer.hand = deck.getInitialHand(cardDeck)

        handEvaluator.getHandValue(player.hand)

        console.log(player.hand)
        console.log(dealer.hand)
        console.log(cardDeck)
    }
}