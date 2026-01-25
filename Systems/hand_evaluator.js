export class HandEvaluator{
    constructor(gameState) {
        this.gameState = gameState
    }

    determineHandValue(hand, firstCard, secondCard){
        this.gameState[hand] = firstCard + secondCard
    }
}