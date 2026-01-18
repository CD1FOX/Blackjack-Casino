export class CardValueLogic {
    constructor(gameStateSystem) {
        this.gameStateSystem = gameStateSystem
    }

    cardValueSetter(){
        const test = "1"
        const numberOnly = test.slice(1)

        return numberOnly
    }
}