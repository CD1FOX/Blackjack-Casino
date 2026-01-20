export function UISystem(gameStateSystem, cardDistributerSystem, handEvaluatorSystem) {
    const btn = document.querySelector(".btn")

    btn.addEventListener("click", () => {
        gameStateSystem.houseHand = [cardDistributerSystem.RandomCard(), cardDistributerSystem.RandomCard()]
        gameStateSystem.playerHand = [cardDistributerSystem.RandomCard(), cardDistributerSystem.RandomCard()]

        console.log(`${gameStateSystem.houseHand} \n${gameStateSystem.playerHand}`)


        gameStateSystem.playerHandValue = parseInt(handEvaluatorSystem.cardValueSetter(gameStateSystem.playerHand, 0, gameStateSystem.playerHandValue), 10)
        gameStateSystem.playerHandValue += parseInt(handEvaluatorSystem.cardValueSetter(gameStateSystem.playerHand, 1, gameStateSystem.playerHandValue), 10)

        console.log(gameStateSystem.playerHandValue)

        gameStateSystem.playerHandValue = 0
    })
}