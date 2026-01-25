export function UI(gameState, cardDistributer, handEvaluator, turnBase) {
    const playbtn = document.querySelector(".play-btn")
    const hitbtn = document.querySelector(".hit-btn")
    const stopbtn = document.querySelector(".stop-btn")

    playbtn.addEventListener("click", () => {
        cardDistributer.DrawHand("house")
        gameState.playerHand = [cardDistributer.DrawCard("player"), cardDistributer.DrawCard("player")]

        console.log(`${gameState.houseHand} \n${gameState.playerHand}`)


        gameState.playerHandValue = parseInt(handEvaluator.determineCardValue(gameState.playerHand, 0, gameState.playerHandValue), 10)
        gameState.playerHandValue += parseInt(handEvaluator.determineCardValue(gameState.playerHand, 1, gameState.playerHandValue), 10)

        console.log(gameState.playerHandValue)

        
    })

    hitbtn.addEventListener("click", ()=> {
        console.log(gameState.playerCardCount)
        gameState.playerHand.push(cardDistributer.DrawCard("player"))
        console.log(gameState.playerCardCount)
        gameState.playerHandValue += parseInt(handEvaluator.determineCardValue(gameState.playerHand, (gameState.playerCardCount - 1), gameState.playerHandValue), 10)

        console.log(gameState.playerHand)
        console.log(gameState.playerHandValue)
    })

    stopbtn.addEventListener("click", ()=> {
        turnBase.changeTurn("house")
        console.log(gameState.turn)
    })
}