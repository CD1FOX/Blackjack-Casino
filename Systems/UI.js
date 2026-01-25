export function UI(gameState, cardDistributer, handEvaluator, turnBase, cardEvaluator) {
    const playbtn = document.querySelector(".play-btn")
    const hitbtn = document.querySelector(".hit-btn")
    const stopbtn = document.querySelector(".stop-btn")

    playbtn.addEventListener("click", () => {
        const dealerHand = cardDistributer.drawHand()
        const playerHand = cardDistributer.drawHand()

        // gameState.playerHandValue = parseInt(cardEvaluator.determineCardValue(playerHand, 0, gameState.playerHandValue), 10)
        // gameState.playerHandValue += parseInt(cardEvaluator.determineCardValue(playerHand, 1, gameState.playerHandValue), 10)
    })


}