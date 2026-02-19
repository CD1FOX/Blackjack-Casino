import { Deck } from "../game-logic/deck.js";
import { Entity } from "../entities/entity.js";
import { HandEvaluator } from "../game-logic/hand-evaluator.js";

const deck = new Deck()
const handEvaluator = new HandEvaluator()
const player = new Entity("Player")
const dealer = new Entity("Dealer")

export class GameFlow {
    constructor() {
        this.cardDeck = deck.createDeck()
    }

    startGame() {


        player.hand = deck.getInitialHand(cardDeck)
        dealer.hand = deck.getInitialHand(cardDeck)

        player.handValue = handEvaluator.getHandValue(player.hand)
        dealer.handValue = handEvaluator.getHandValue(dealer.hand)

        console.log(player.hand)
        console.log(dealer.hand)
        console.log(player.handValue)
        console.log(dealer.handValue)
        console.log(cardDeck)
    }

    hitCard() {

    }
}