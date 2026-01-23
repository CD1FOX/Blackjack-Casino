export class TurnBaseSystem{
    constructor (gameStateSystem){
        this.gameStateSystem = gameStateSystem
    }

    changeTurn(turn){
        this.gameStateSystem.turn = turn
    }
}