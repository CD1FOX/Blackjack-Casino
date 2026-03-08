import { Deck } from "../game-logic/deck.js";
import { HandEvaluator } from "../game-logic/hand-evaluator.js";
import { DetermineDealerAction } from "../game-logic/determine-dealer-action.js";
import { DetermineWinner } from "../game-logic/determine-winner.js";
import { UIRenderer } from "../ui/ui-renderer.js";
import { Entity } from "../entities/entity.js";


const deck = new Deck()
const handEvaluator = new HandEvaluator()
const determineDealerAction = new DetermineDealerAction()
const determineWinner = new DetermineWinner()
const uiRenderer = new UIRenderer()
const player = new Entity("player")
const dealer = new Entity("dealer")

export class GameFlow {
    constructor() {
        this.cardDeck = deck.createDeck()
    }

    startGame() {
        player.hand = deck.getInitialHand(this.cardDeck)
        dealer.hand = deck.getInitialHand(this.cardDeck)

        uiRenderer.displayEntityHand(player)
        uiRenderer.displayEntityHand(dealer)

        player.handValue = handEvaluator.getHandValue(player)
        dealer.handValue = handEvaluator.getHandValue(dealer)

        console.log(player.hand)
        console.log(dealer.hand)
        console.log(player.handValue)
        console.log(dealer.handValue)
        console.log(this.cardDeck)
    }

    hit() {
        if (player.bust){
            console.log("Player bust. Cannot draw more cards")
            return
        }

        player.hand.push(deck.getCard(this.cardDeck))

        uiRenderer.displayEntityHand(player)

        player.handValue = handEvaluator.getHandValue(player)

        if (player.bust){
            console.log(determineWinner.getWinner(player, dealer))
        }

        console.log(player.hand)
        console.log(player.handValue)
        console.log(this.cardDeck)
    }

    async stand() { 
       await determineDealerAction.determineDealerAction(dealer, this.cardDeck)

        uiRenderer.displayEntityHand(dealer)

       console.log(determineWinner.getWinner(player, dealer))
    }
}