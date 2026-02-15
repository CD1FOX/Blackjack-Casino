import { Deck } from "../game-logic/deck.js";

const deck = new Deck()

export class GameFlow{
    startGame(){
        deck.createDeck()
        console.log(deck.getCard())
    }
}