export class TurnBase {
    constructor (gameState){
        this.gameState = gameState
    }

    changeTurn(turn){
        this.gameState.turn = turn
    }
}