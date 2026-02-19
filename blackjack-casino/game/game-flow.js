import { Deck } from "../game-logic/deck.js";
import { HandEvaluator } from "../game-logic/hand-evaluator.js";
import { DetermineDealerAction } from "../game-logic/determine-dealer-action.js";
import { Entity } from "../entities/entity.js";


const deck = new Deck()
const handEvaluator = new HandEvaluator()
const determineDealerAction = new DetermineDealerAction()
const player = new Entity("Player")
const dealer = new Entity("Dealer")

export class GameFlow {
    constructor() {
        this.cardDeck = deck.createDeck()
    }

    startGame() {
        player.hand = deck.getInitialHand(this.cardDeck)
        dealer.hand = deck.getInitialHand(this.cardDeck)

        player.handValue = handEvaluator.getHandValue(player.hand)
        dealer.handValue = handEvaluator.getHandValue(dealer.hand)

        console.log(player.hand)
        console.log(dealer.hand)
        console.log(player.handValue)
        console.log(dealer.handValue)
        console.log(this.cardDeck)
    }

    hit() {
        player.hand.push(deck.getCard(this.cardDeck))

        player.handValue = handEvaluator.getHandValue(player.hand)

        console.log(player.hand)
        console.log(player.handValue)
        console.log(this.cardDeck)
    }

    stand() { 
        determineDealerAction.getDealerAction(dealer, this.cardDeck)
    }
}