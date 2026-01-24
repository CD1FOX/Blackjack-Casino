export class GameState {
    constructor() {
        this.houseHand = []
        this.playerHand = []
        this.houseCardValue = null
        this.playerHandValue = null
        this.houseCardCount = 0
        this.playerCardCount = 0
        this.currentTurn = "player"
    }
}